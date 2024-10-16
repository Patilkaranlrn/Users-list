import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';    //to import [(ngModel)] in angular
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { MyfirstChildComponent } from "./myfirst-child/myfirst-child.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppServiceService } from './app-service.service';



@Component({
  selector: 'app-root',
  standalone: true,
  

  template: `
    <h1>User List</h1>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Lcec_site_id</th>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.lcec_site_id }}</td>
      </tr>
    </table>
  `,
  
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule, MyfirstChildComponent],
  providers: [AppServiceService, HttpClient, MyServiceService],
  
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  
users: any[] = [];

  constructor(private service : AppServiceService){  }

  ngOnInit(){ }

  getDataFromAPI(){
    this.service.getUsers().subscribe((response: any) => {
        console.log('Response from API is ', response)
        this.users = response;
  },  (error: any) => {

    console.log('Error is', error);
  });
  }

}
