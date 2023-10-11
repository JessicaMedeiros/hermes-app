import { Component, OnInit } from '@angular/core';
import { BemEstarService } from '../../../services/bem-estar/bem-estar.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface RespostaServidor{
  message: boolean,
  item: any
}
@Component({
  selector: 'app-bem-estar',
  templateUrl: './bem-estar.component.html',
  styleUrls: ['./bem-estar.component.css']
})
export class BemEstarComponent implements OnInit {

  done!: boolean;


  nota!: number;
  observacao!: string;
  errorMessage = '';
  message = '';
  messageNivelDeBemEstarBaixo = '';

  loading = true;

  mandarSemObsevacao = false;

  bemestar: any = []
  bemestar$: Observable<RespostaServidor> | undefined
  refreshBemestar$ = new BehaviorSubject<boolean>(true);

  textButton ="Salvar como me sinto";
  colorButton = 'primary';

  id_bem_estar!: number;
  constructor(private service: BemEstarService) { }


  ngOnInit(): void {

    this.bemestar$ = this.refreshBemestar$
    .pipe(switchMap(_ =>
      this.service.chegaSeUsuarioJaRespondeuFeedbackDoDia(1)
    ));


    this.bemestar$.subscribe({
      next: (res) => {
        this.done = res.message;
        if(res.item){
          this.bemestar = res.item;

          this.id_bem_estar = this.bemestar.id_bem_estar;
          console.log('this, done', res,  this.done)
        }

        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error;
        console.log('error', error);
        this.loading = false;
      },
      complete: () => {
        console.log('Request complete');
      }
    })



  }


  nivel(nota: number){
    this.nota = nota;
    console.log('escala', nota)
  }

  salvar(){

    this.errorMessage = "";
    this.messageNivelDeBemEstarBaixo = ""
    this.message  = "";
    // this.loading = true;


    if(!this.nota){
      this.errorMessage = "Você precisa selecionar uma das notas de 1 a 10";
      return;
    }


    if(this.nota < 7){
      console.log("=======", this.nota, !this.nota)
      console.log("==observacao=====", this.observacao == "" , !this.nota)
      if((this.observacao == "" || !this.observacao) && !this.mandarSemObsevacao){

        this.messageNivelDeBemEstarBaixo = "Você está marcando que seu nível está baixo. Queremos saber mais sobre isso. Nos informe mais sobre o que está acontecendo";
        this.mandarSemObsevacao = true;
        this.textButton = "Salvar só a nota do bem estar"
        this.colorButton = 'warn';
        return
      }
    }

    const bemestar = {id_paciente: 1, nota: this.nota, observacao: this.observacao}

    this.service.salvarBemEstar(bemestar).subscribe({
      next: (res) => {
        this.message = res.message;
        this.refreshBemestar$.next(true)
      },
      error: (error) => {
        this.errorMessage = error;
        console.log('error', error)
      }
    })
  }

  apagarDados(){
    this.service.limparAvaliacao(this.id_bem_estar).subscribe({
      next: (res) => {
        this.refreshBemestar$.next(true)
      },
      error: (error) => {
        this.errorMessage = error;
        console.log('error', error)
      }
    })
  }
}
