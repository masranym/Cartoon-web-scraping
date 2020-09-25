import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Toon} from '../pages/dasbord/dasbord.component'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getdata(): Observable<Toon[]> {
    return this.http.get<Toon[]>('http://localhost:5000/api/nt');
  }
  update(id:number):Observable<Toon[]>{
    console.log(id)
    return this.http.put<Toon[]>('http://localhost:5000/api/nt/'+id,null);
  }
}
