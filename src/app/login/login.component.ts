import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { InputsValidators } from '../inputs.validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title ="Log In"
errorMessage:string='';
 
  constructor(private _DataService:DataService , private _Router:Router ) { }

  
loginForm = new FormGroup({
 
  email: new FormControl(null , [Validators.required , Validators.email ,InputsValidators.email]),
  password: new FormControl(null, [Validators.required])
})


get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('password');
}

submitForm(loginForm:any){
this._DataService.login(loginForm.value).subscribe((response)=>{
    if(response.message == "success"){
      localStorage.setItem('token',response.token);
      this._DataService.saveCurrentUser();
      this._Router.navigate(['/lazy/list']);
    }
    else{
   
      this.errorMessage = response.message
      
    }

})

}

  ngOnInit(): void {
  }

}
