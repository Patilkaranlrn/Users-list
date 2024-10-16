import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import observable serving
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AppServiceService {
  private apiUrl = 'http://localhost:8000/api/getAll'; //backend api Url
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.apiUrl);  //fetch data from backend api

  }

}

