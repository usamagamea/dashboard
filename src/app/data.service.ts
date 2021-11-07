import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url:string='https://route-egypt-api.herokuapp.com/'; 



  constructor(private _HttpClient:HttpClient , private _Router:Router ) {
    this.saveCurrentUser()
   }

  currentUser = new BehaviorSubject(null);
  saveCurrentUser(){
    let userToken:any = localStorage.getItem('token');
     this.currentUser.next(jwtDecode(userToken));  
  }

  getCurrentUser(){
  return this.currentUser.asObservable();
  }

  register(formData: any):Observable<any>{
    return this._HttpClient.post(this.url + 'signup' ,formData);
  }
  
  login(formData: any):Observable<any>{  
    return this._HttpClient.post(this.url+ 'signin' ,formData);
  } 

logout(){
  localStorage.removeItem('token');
  this.currentUser.next(null);
  this._Router.navigate(['/lazy/login']);
}

}