import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GerenciarOcorrenciaService } from '../../../services/gerenciar-ocorrencia.service';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-gerenciar-ocorrencia',
  templateUrl: './gerenciar-ocorrencia.component.html',
  styleUrls: ['./gerenciar-ocorrencia.component.css']
})
export class GerenciarOcorrenciaComponent implements OnInit, OnDestroy {

  ocorrencia: any = []
  profissionalSelecionado!: number;
  id_profissional!: string | null;
  username!: string | null;
  admin!: boolean;
  id_ocorrencia!: number | any;

  editavel!: boolean;

  ocorrencia$: Observable<Array<any>> | undefined
  refreshOcorrencia$ = new BehaviorSubject<boolean>(true);

  constructor(
    private service: GerenciarOcorrenciaService,
    private ActivatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.admin = localStorage.getItem('tipo') == 'admin' ? true : false;
    this.id_profissional = localStorage.getItem('id_profissional');
    this.username = localStorage.getItem('username');

    this.id_ocorrencia = this.ActivatedRoute.snapshot.paramMap.get('id_ocorrencia' as any);

    this.ocorrencia$ = this.refreshOcorrencia$
    .pipe(switchMap(_ =>
      this.service.buscarInformacoesSobreDesfechodaOcorrencia(this.id_ocorrencia)
    ));


    this.ocorrencia$.subscribe({
      next: (res) => {
        this.ocorrencia = res;
        this.editavel = this.ocorrencia.ativa? true : false;
        console.log('----', this.ocorrencia)
        // this.loading = false;
      },
      error: (error) => {
        // this.errorMessage = error;
        console.log('error', error);
        // this.loading = false;
      },
      complete: () => {
        console.log('Request complete');
      }
    })


  }


  atribuirProfissional() {

    this.service.atribuirProfissionalaOcorrencia(this.id_ocorrencia, this.profissionalSelecionado)
      .subscribe({
        next: (res) => {
          this.refreshOcorrencia$.next(true);
          console.log(res)
        }, error: (error) => {
          console.log(error)
        }
      })
  }

  atribuirASi() {

    this.service.atribuirProfissionalaOcorrencia(this.id_ocorrencia, this.id_profissional)
      .subscribe({
        next: (res) => {
          this.refreshOcorrencia$.next(true);
          console.log(res)
        }, error: (error) => {
          console.log(error)
        }
      })
  }

  atualizar(finalizar: boolean){
    this.service.salvarDesfecho(this.ocorrencia, finalizar)
      .subscribe({
        next: (res) => {
          this.refreshOcorrencia$.next(true);
          console.log(res)
        }, error: (error) => {
          console.log(error)
        }
      })
  }

  ngOnDestroy(){
    this.refreshOcorrencia$.unsubscribe();
  }


}
