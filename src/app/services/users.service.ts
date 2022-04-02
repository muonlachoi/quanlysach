import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  constructor(injector: Injector) {
    super(injector)
  }
  getData(params: any) {
    return this.get("/users", params)
  }
  addUsers(body: any) {
    return this.post("/users", body)
  }
  removeUsers(id: number) {
    return this.delete(`/users/${id}`)
  }
  updates(id: number, body: any) {
    return this.patch(`/users/${id}`, body);
  }
  getOnedata(id: number, params: any) {
    return this.get(`/users/${id}`, params)
  }
}
