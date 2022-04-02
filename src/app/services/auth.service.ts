import { Injectable, Injector } from '@angular/core';
// import { Result } from '../model/result.model';
import { Users } from '../model/users.model';
import { BaseService } from './base.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  data:Users[]=[];
  listUsers:any;
  users:Users=new Users
  constructor(injector:Injector,private userService:UsersService) { super(injector)
  }
  
  verifyUsers(user:Users){
    this.listUsers=localStorage.getItem('listUsers')
    this.data=JSON.parse(this.listUsers)
    
    if(this.data.findIndex(users => users.email == user.email && users.password == user.password) != -1){
      return true
    } else{
      return false
    }
    
  }
  checkLogin(){
    let users=localStorage.getItem('users');
    if(users){
        let user=<Users>JSON.parse(users);
        
        return (this.verifyUsers(user))
      }
      return false
        
  }
  doLogin(user:Users){
    if(this.verifyUsers(user)){
      localStorage.setItem('users',JSON.stringify(user))
      return true;
    }
    return false
  }

}
