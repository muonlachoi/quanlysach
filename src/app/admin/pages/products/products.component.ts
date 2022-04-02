import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { Result } from 'src/app/model/result.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data:Product[]=[];
  products:Product=new Product;
  isEdit:boolean=false;
  title:string="Add Books";
  // searchQuery:any;
  currentPage:number=1;
  totalPage:number=100;
  perPage:number=5;
  constructor(private productServer:ProductService ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    // debugger
    this.productServer.getData({}).then((rs:Result)=>{
      // this.totalPage=rs.total_pages;
      this.data=rs.data
    })
  }
  checkBookTitle(book:Product){
    if(this.data.findIndex(item => item.tuasach.trim().toLowerCase()== book.tuasach.trim().toLowerCase()) == -1){
      return true
    }else{
      return false
    }
  }
  checkBookUp(book:Product){
    if(this.data.findIndex(item => item.tuasach.trim().toLowerCase()== book.tuasach.trim().toLowerCase() && item.id != book.id) == -1){
      return true
    }else{
      return false
    }
  }
  onSubmit(form:NgForm){
    if(form.valid){
        if(this.isEdit==true){
            this.isEdit=false
            this.upData(form)
           
        }
        else{
        if(this.checkBookTitle(this.products)){
          this.productServer.addBooks(this.products).then(res=>{
            alert("Thêm mới thành công")
            this.loadData();
          }).catch(err=>{
            console.log(err)
          })
        }else{
          alert('Sách này đã tồn tại')
        }
      }
    }else{
      alert("Vui lòng điền đầy đủ thông tin!")
    }
  }
  onThem(){
    this.title="Add Book"
    this.isEdit=false
    this.products=new Product
  }
  delProduct(id:number){
      if(confirm('Bạn có muốn xóa không')){
        this.productServer.removeBooks(id).then((res)=>{
          alert('Xóa thành công');
          this.loadData();
        })
      }
  }
  
  onEdit(id:number){
    this.isEdit=true
    this.productServer.getOnedata(id,{}).then((res:any)=>{
      this.products=res.data
      this.title="Update Books"
      // console.log(res)
    })
    
  }
  upData(form2:NgForm){
    if(form2.valid){
      if(this.checkBookUp(this.products)){
        this.productServer.updates(this.products.id,this.products).then((res)=>{
          alert('Update thành công')
          this.loadData();
        })
      }else{
        alert('Sách Đã tồn tại')
      }
    }
  }
  // prevPage(){
  //   this.currentPage-=1;
  //   this.loadData();
  // }
  // nextPage(){
  //   this.currentPage+=1;
  //   this.loadData();
  // }
}
