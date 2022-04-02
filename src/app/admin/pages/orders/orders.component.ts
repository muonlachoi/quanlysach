import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Orders } from 'src/app/model/order.model';
import { Result } from 'src/app/model/result.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  data:Orders[]=[]
  orders:Orders=new Orders;
  title:string="Add Orders";
  isEdit:boolean=false;
  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.orderService.getData({}).then((res:Result)=>{
      this.data=res.data
    })
  }
  onSubmit(form:NgForm){
      if(form.valid){
        if(this.isEdit==true){
          this.isEdit=false;
          this.upData()
        }else{
          this.orderService.addOrders(this.orders).then(res=>{
            alert('Thêm mới thành công')
            this.loadData()
          }).catch(err=>{
            console.log(err)
          })
        }
      }else{
        alert('Lỗi rồi')
      }
  }
  onEditOrders(id:number){
       this.isEdit=true
      this.orderService.getOnedata(id,{}).then((res:any)=>{
        this.orders=res.data
        this.title="Update Orders"
      })
  }
  upData(){
    this.orderService.updates(this.orders.id,this.orders).then((res)=>{
      alert("Update thành công")
      this.loadData();
    })
  }
  delOrders(id:number){
    if(confirm('Bạn có muốn xóa không')){
      this.orderService.removeOrders(id).then((res)=>{
        alert('Xóa thành công');
        this.loadData();
      })
    }
  }
  onAddOrders(){
    this.title="Add Orders"
    this.isEdit=false
    this.orders=new Orders;
  }
}
