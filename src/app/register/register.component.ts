
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { InputsValidators } from "../inputs.validators";




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage:string ='';
  title ="Register"
  constructor(private _DataService:DataService,
    private _Router:Router) { }

registerForm = new FormGroup({
  first_name: new FormControl(null , [Validators.required ,Validators.minLength(5) , InputsValidators.EnglishOnly]),
  last_name: new FormControl(null,[Validators.required ,Validators.minLength(3) , InputsValidators.EnglishOnly]),
  email: new FormControl(null , [Validators.required , Validators.email ,InputsValidators.email]),
  password: new FormControl(null, [Validators.required])
})

get firstName(){
  return this.registerForm.get('first_name')
}
get lastName(){
  return this.registerForm.get('last_name')
}
get email(){
  return this.registerForm.get('email')
}
get password(){
  return this.registerForm.get('password')
}


submitForm(registerForm:any){
  this._DataService.register(registerForm.value).subscribe(
 (response)=>{
   if(response.message == "success"){
     this._Router.navigate(['/lazy/login'])
   }
   else{
  
     this.errorMessage = response.message
     
   }
 }

  )
}


  ngOnInit(): void {
  }

}
