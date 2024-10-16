import { Injectable } from '@angular/core';
//import me httpclient service
import { HttpClient } from '@angular/common/http';
//import obervable service
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users'; //Backend API URL 

  constructor(private http:  HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl); // Fetch data from the backend
  }

}
