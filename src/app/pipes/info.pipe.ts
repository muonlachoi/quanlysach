import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value){
      return "Không xác định"
    }
    else{
      let currentDate= new Date();
      let ngaysinh=new Date(value);
      let namhientai=currentDate.getFullYear();
      let namsinh=ngaysinh.getFullYear();
      let tuoi=namhientai - namsinh;
      return `${tuoi} tuổi`;
    }
    return null;
  }

}
