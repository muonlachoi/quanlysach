import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/result.model';
import { Users } from 'src/app/model/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data:Users[]=[];
  listUsers:Users=new Users;
  users:Users=new Users;
  constructor( private router:Router, private authService:AuthService,private userService:UsersService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.userService.getData({}).then((res:any)=>{
      this.listUsers=res.data
      localStorage.setItem('listUsers',JSON.stringify(this.listUsers))
    })
  }
  onSubmit(form:NgForm){
    if(form.valid){
      if(this.authService.doLogin(this.users)){
        this.router.navigate(['admin/home'])
      }else{
        alert('Tài khoản không tồn tại');
      }
    }
    else{
      alert("Mời bạn nhập đầy đủ thông tin")
    }
  }
}
