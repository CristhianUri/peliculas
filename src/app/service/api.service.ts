import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler,HttpHeaders, } from '@angular/common/http';
import { Observable,map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor( private http: HttpClient) { }

  postService(paramsRep: any): Observable<T>{
    const header= new Headers({
      accept: 'application/json'
    })
    const { url,params,body}  = paramsRep;
    const options = {
      header,
      params
    }
    return this.http.post<T>(url,body, options).pipe(map(res=>res), catchError(this.handerError));
  }

  getService(paramsRep: any): Observable<T>{
    const header= new Headers({
      accept: 'application/json'
    })
    const { url,params}  = paramsRep;
    const options = {
      header,
      params
    }
    return this.http.get<T>(url, options).pipe(map(res=>res), catchError(this.handerError));
  }
  private handerError(err: HttpErrorResponse){
    return  throwError(()=>err)
  }
}

