import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  constructor(injector:Injector) {
    super(injector)
   }
   getData(params:any){
     return this.get("/books",params)
   }
   addBooks(body:any){
     return this.post("/books",body)
   }
   removeBooks(id:number){
     return this.delete(`/books/${id}`)
   }
   updates(id: number, body:any) {
    return this.patch(`/books/${id}`, body);
    }
  getOnedata(id:number,params:any){
      return this.get(`/books/${id}`,params)
    }
  
}
