import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/result.model';
import { Users } from 'src/app/model/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email:string="";
  user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getName()
  }
  getName(){
    this.user=localStorage.getItem('users');
    let data=<Users>JSON.parse(this.user)
    console.log(data)
      this.email=data.email
  }
  logout(){
    let user=localStorage.getItem('users');
    if(user){
       localStorage.removeItem('users')
      //  this.router.navigate(['login'])
      location.reload()
    }
     else {
        alert('Lỗi')
      }
  }
}
