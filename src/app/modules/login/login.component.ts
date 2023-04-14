import { ApiService } from './../../service/api.service';
import { properties } from './../../../assets/properties/propertis';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  logo= properties.logo;
  formLogin: FormGroup = new FormGroup({} );

  constructor( private fb: FormBuilder,private readonly apiService: ApiService<any> ){

  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  login(){
    if(this.formLogin.invalid){
    this.formLogin.markAllAsTouched();
    for(const key in this.formLogin.controls){
      //console.log(key)
      this.formLogin.controls[key].markAsDirty();
    }
    return;
    }
    const {username, password}= this.formLogin.value;

    const body ={
      username,
      password,
     // "request_token":"e885b273d297dc5f02121faaa4a88d7d"
     request_token: sessionStorage.getItem('requestToken')
    }
    const configPost= {url: ConstantUri.ValidateWithLogin,params: {api_key: ConstantUri.apikey}, body};
    this.apiService.postService(configPost).subscribe(val=>{
      console.log(val);
      const {request_token} =val;
      sessionStorage.setItem('requestToken', request_token)
    });

    console.log(this.formLogin.value)
  }

}
