import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry} from 'rxjs';

export interface Patient {
  cid: string;
  prefix: string;
  fname: string;
  lname: string;
  phone: string;
  address: {
    bannumber: string;
    moo: string;
    subdistrict: string;
    district: string;
    province: string;
  };
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  urlServe = "http://localhost:5000";
  constructor(private http: HttpClient) { }

  sendData(path:string,data:any):Observable<any>{
    return this.http.post(`${this.urlServe}/${path}`, data);
  }

getPatient(): Observable<Patient[]>{
  return this.http.get<Patient[]>(this.urlServe+'/getpatient')
}

}
