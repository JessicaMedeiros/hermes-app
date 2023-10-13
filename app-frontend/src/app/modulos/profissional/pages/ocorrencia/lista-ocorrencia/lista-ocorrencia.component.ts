import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GerenciarOcorrenciaService } from '../../../services/gerenciar-ocorrencia.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit, OnDestroy{

  dados: any = [];
  loading = true;
  colunas = ['nota', 'data_ocorrencia', 'hora_ocorrencia', 'sintomas', 'data', 'ativa', 'analisar']

  status: any;


  private ocorrencia$!: Observable<Array<any>> | undefined
  refreshOcorrencia$ = new BehaviorSubject<boolean>(true);

  constructor(private service: GerenciarOcorrenciaService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.ActivatedRoute.params.subscribe(routeParams => {
      this.status =  this.ActivatedRoute.snapshot.paramMap.get('status' as any);
      this.refreshOcorrencia$.next(true);

    });


    this.ocorrencia$ = this.refreshOcorrencia$.pipe(switchMap(_ =>
      this.service.listaOcorrencia(this.status)
    ));

    this.ocorrencia$.subscribe(res => {
      this.dados = res;
        this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.refreshOcorrencia$.unsubscribe();
  }
}
