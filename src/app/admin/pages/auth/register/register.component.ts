import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/result.model';
import { Users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data:Users []=[];
  users:Users=new Users;
  constructor(private router:Router,private userService:UsersService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
   
    this.userService.getData({}).then((rs:Result)=>{
      this.data=rs.data
      // console.log(this.data)
    })
  }
  checkEmail(user:Users){
    if(this.data.findIndex(users => users.email == user.email) == -1){
      return true
    }else{
      return false
    }
  }
  onSubmit(form:NgForm){
    if(form.valid){
        if(this.checkEmail(this.users)){
          this.userService.addUsers(this.users)
          alert("Đăng ký thành công");
          this.router.navigate(['login'])
        }else{
          alert("Tài khoản đã tồn tại")
        }
        
    }
    else{
      alert("Đăng ký thất bại")
    }
  }
}
