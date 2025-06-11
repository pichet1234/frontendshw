import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertOneService {

  constructor() { }
  //for insert
  getInsert(succes:any){
    return Swal.fire({
      title:'Insert data successfull',
      text:succes,
      icon:'success',
    })
  }

  geterror(){
      return Swal.fire({
      title:'Insert Data Failed',
      text:'เกิดข้อผิดพลาด',
      icon:'warning',
    });
  }

}
