import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Instruments {
  id?: string;
  instrument: string;
  type: string;
  name: string;
  manufacturer: string;
  price: any;
  description: string;
  image: string;
  seller_username: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/instruments/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/instruments/search/" + search);
  }

  public findInstrumentById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/instruments/product/" + id);
  }

  public insert(model: Instruments) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/instruments/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/instruments/myinstruments/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/instruments/delete/" + id)
  }

  showInstrument(id: String): any {
    this.router.navigate(['instruments/oneInstrument/' + id]);
  }

  updateInstrument(id: String): any {
    this.router.navigate(['instruments/updateInstrument/' + id]);
  }

  public update(model: Instruments) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/instruments/update", model);
  }
}