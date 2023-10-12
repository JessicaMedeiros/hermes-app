import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GerenciarOcorrenciaService {
  REST_API = "";


  //função que verifica se request está sendo feito no localhost ou no horaku
   location() {
     if (environment.DEV_MODE  == "development") {
       this.REST_API = "http://localhost:3333";
     }
   }

   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

   constructor(private http: HttpClient) { }


   atribuirProfissionalaOcorrencia(id_ocorrencia: any, id_profissional: any){

    this.location()

    let API_URL = `${this.REST_API}/api/ocorrencia/atribuir/profissional/${id_ocorrencia}/${id_profissional}`;

    console.log('API_URL', API_URL)

    return this.http.patch(API_URL, id_ocorrencia)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  buscarInformacoesSobreDesfechodaOcorrencia(id_ocorrencia: any){
    this.location()

    let API_URL = `${this.REST_API}/api/ocorrencia/buscar/desfecho/${id_ocorrencia}`;

    console.log('API_URL', API_URL)

    return this.http.get(API_URL)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  salvarDesfecho(ocorrencia: any, finalizar:boolean){
    this.location()

    let API_URL = `${this.REST_API}/api/ocorrencia/desfecho/salvar/${finalizar}`;

    console.log('API_URL', API_URL)

    return this.http.patch(API_URL, ocorrencia)
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )

  }

  listaOcorrencia(){
    this.location()

    let API_URL = `${this.REST_API}/api/ocorrencia/geral/buscar`;

    console.log('API_URL', API_URL)

    return this.http.get(API_URL)
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

