import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BemEstarService {

  // REST_API = "http://localhost/api";

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  salvarBemEstar(bemestar: any) {

    let API_URL = `/api/bem-estar/adicionar/novo`;

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
