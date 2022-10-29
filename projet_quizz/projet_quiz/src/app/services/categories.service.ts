import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Categories} from "../models/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  Host = environment.host;
  constructor(private http: HttpClient) {}

  getCategorie(choix : number): Observable<any> {
    var url2 = this.Host + 'categories?id_categorie=eq.'+choix;
  
    return this.http.get(url2);
  } 
}

