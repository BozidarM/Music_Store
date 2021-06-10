import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Softwares {
  id?: string;
  name: string;
  developer: string;
  price: any;
  description: string;
  image: string;
  seller_username: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicSoftwaresService {

  constructor(private http:HttpClient, private router:Router) { }

  public findAll() : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/softwares/all");
  }

  public findAllByName(search: string) : Observable<HttpResponse<any>> {
    return this.http.get<any>("http://localhost:8080/softwares/search/" + search);
  }

  public findMusicSoftwaresById(id: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/softwares/product/" + id);
  }

  public insert(model: Softwares) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/softwares/insert", model);
  }

  public findAllBySeller_username(sUsername: string) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/softwares/mysoftwares/" + sUsername);
  }

  public delete(id: string) : Observable<HttpResponse<any>>{
    return this.http.delete<any>("http://localhost:8080/softwares/delete/" + id)
  }

  showSoftware(id: String): any {
    this.router.navigate(['softwares/oneSoftware/' + id]);
  }

  updateSoftware(id: String): any {
    this.router.navigate(['softwares/updateSoftware/' + id]);
  }

  public update(model: Softwares) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/softwares/update", model);
  }
}