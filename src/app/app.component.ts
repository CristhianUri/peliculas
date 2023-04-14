import { ApiService } from './service/api.service';
import { properties } from './../assets/properties/propertis';
import { Component } from '@angular/core';
import { ConstantUri } from './utils/constantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService<any>  ){
    const getConfig = {url: ConstantUri.tokenNew,params: {api_key: ConstantUri.apikey}};
    this.apiService.getService(getConfig).subscribe(val=> {
     console.log(val);
     const {request_token} =val;
     sessionStorage.setItem('requestToken', request_token);
   });
  }

  title = 'movies';


}
