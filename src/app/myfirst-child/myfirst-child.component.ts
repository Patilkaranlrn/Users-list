import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-myfirst-child',
  standalone: true,
  imports: [],
  templateUrl: './myfirst-child.component.html',
  styleUrl: './myfirst-child.component.scss'
})
export class MyfirstChildComponent implements OnInit {
@Input() message='Connected'
constructor(public myChild:MyServiceService){
  
}
  ngOnInit(): void {
    this.myChild.logMessage('welcome to my child')
  }
}
