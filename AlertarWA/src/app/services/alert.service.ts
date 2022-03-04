import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  

  TokenSecurity:string;
  constructor(private _http:HttpClient) { 
    this.TokenSecurity='';
  }
  getQuery(query:string){
    const url=`http://34.214.57.162:3000/${query}`;

    const headers=new HttpHeaders({
      'Authorization':'Bearer '+this.TokenSecurity
    });
    return this._http.get(url);
  }
  getAlerts(){
    return this.getQuery("getalertsforsuscribe/3&53453dfdsf")
    .pipe(map((data)=>{
      return data;
    }));
  }
  getAlertsbyUser(){
    return this.getQuery("alertlist/3&53453dfdsf")
    .pipe(map((data)=>{
      return data;
    }));
  }
}
