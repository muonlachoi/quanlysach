import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title:string="Giới thiệu bản thân";
  today:Date=new Date()
  birthday:Date=new Date('01/17/2001');
  ngOnInit(): void {
  }
  
}
