import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService {

  constructor(injector: Injector) {
    super(injector)
  }
  getData(params: any) {
    return this.get("/orders", params)
  }
  addOrders(body: any) {
    return this.post("/orders", body)
  }
  removeOrders(id: number) {
    return this.delete(`/orders/${id}`)
  }
  updates(id: number, body: any) {
    return this.patch(`/orders/${id}`, body);
  }
  getOnedata(id: number, params: any) {
    return this.get(`/orders/${id}`, params)
  }
}
