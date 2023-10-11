import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BemEstarService {

 REST_API = "";


 //função que verifica se request está sendo feito no localhost ou no horaku
  location() {
    if (environment.DEV_MODE  == "development") {
      this.REST_API = "http://localhost:3333";
    }
  }

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  chegaSeUsuarioJaRespondeuFeedbackDoDia(id_paciente:number){

    this.location()
    let API_URL = `${this.REST_API}/api/bem-estar/checa-se-respondida/${id_paciente}`;

    console.log('API_URL', API_URL)
    return this.http.get(API_URL)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }


  historicoDeBemEstar(id_paciente:number){

    this.location()
    let API_URL = `${this.REST_API}/api/bem-estar/historico/${id_paciente}`;

    console.log('API_URL', API_URL)
    return this.http.get(API_URL)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  limparAvaliacao(id_bem_estar:number){

    this.location();

    let API_URL = `${this.REST_API}/api/bem-estar/excluir/${id_bem_estar}`;

    console.log('API_URL', API_URL)
    return this.http.patch(API_URL, id_bem_estar)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }


  salvarBemEstar(bemestar: any) {

    this.location()
    let API_URL = `${this.REST_API}/api/bem-estar/adicionar/novo`;

    console.log('API_URL', API_URL)
    return this.http.post(API_URL, bemestar)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      console.log("ErrorHandler service", error)
      errorMessage = error.error.message;
    } else {
      // Handle server error
      console.log("ErrorHandler service", error)
      if(error.error.message){
        errorMessage = `Error Code: ${error.status}\n | Messagem: ${error.error.message}.`;
      }else if(error.error){
        if(error.status == 0){
          errorMessage = `Servidor fora do ar! \n Error Code: ${error.status} | Messagem: ${error.message}`;
        }else{
        errorMessage = `${error.error}\n Error Code: ${error.status} | Messagem: ${error.message}`;
        }
      }else{
        errorMessage = `Error Code: Erro desconhecido `;
      }
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
