import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor ( private http: HttpClient) {}

  getData(){
    
  }

  logMessage(message: string) {
    console.log(message);
  }
}
