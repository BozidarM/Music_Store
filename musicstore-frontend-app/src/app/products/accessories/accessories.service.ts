import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Accessories {
  id?: string;
  accessory: string;
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
export class AccessoriesService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/accessories/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/accessories/search/" + search);
  }

  public findAccessoriesById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/accessories/product/" + id);
  }

  public insert(model: Accessories) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/accessories/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/accessories/myaccessories/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/accessories/delete/" + id)
  }

  showAccessory(id: String): any {
    this.router.navigate(['accessories/oneAccessory/' + id]);
  }

  updateAccessory(id: String): any {
    this.router.navigate(['accessories/updateAccessory/' + id]);
  }

  public update(model: Accessories) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/accessories/update", model);
  }
}