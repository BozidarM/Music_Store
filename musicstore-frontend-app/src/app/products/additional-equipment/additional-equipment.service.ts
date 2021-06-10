import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Equipment {
  id?: string;
  equipment: string;
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
export class AdditionalEquipmentService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/additionalEquipment/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/additionalEquipment/search/" + search);
  }

  public findAdditionalEquipmentById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/additionalEquipment/product/" + id);
  }

  public insert(model: Equipment) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/additionalEquipment/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/additionalEquipment/myequipment/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/additionalEquipment/delete/" + id)
  }

  showEquipment(id: String): any {
    this.router.navigate(['additionalEquipment/oneEquipment/' + id]);
  }

  updateEquipment(id: String): any {
    this.router.navigate(['additionalEquipment/updateEquipment/' + id]);
  }

  public update(model: Equipment) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/additionalEquipment/update", model);
  }
}