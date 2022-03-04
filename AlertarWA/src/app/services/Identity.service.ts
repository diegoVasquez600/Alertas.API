//Create Connection to WebApi
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../models/user';

export class IdentityService{
  TokenSecurity:string;
  constructor(private _http:HttpClient){
    this.TokenSecurity='';
  }
  getQuery(query:string){
    const url="{{API.URL}}"+query;
    const headers=new HttpHeaders({
        'Authorization':'Bearer '+this.TokenSecurity
        });
        return this._http.get(url,{headers});
    }
    loginUser(user: User){ 
        this.getQuery("signin/{{user.username}}&{{user.password}}");
        //Send body to WebApi
        const body=new HttpParams()
        .set('username',user.username)
        .set('password',user.password);
        const url="{{API.URL}}"+"signin";
        
        return this._http.post(url,body);

    }

}

