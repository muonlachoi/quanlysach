import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Result } from 'src/app/model/result.model';
import { Users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Users=new Users;
  data:Users[]=[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.userService.getData({}).then((res:Result)=>{
        this.data=res.data
    })
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.userService.updates(this.users.id,this.users).then((res)=>{
        alert('Update thành công')
        this.loadData();
      })
    }
  }
  onEditUser(id:number){
    this.userService.getOnedata(id,{}).then((res:any)=>{
      this.users=res.data
      // console.log(res)
    })
  }
  delUser(id:number){
    if(confirm('Bạn có muốn xóa không')){
      this.userService.removeUsers(id).then((res)=>{
        alert('Xóa thành công');
        this.loadData();
      })
    }
  }
}
