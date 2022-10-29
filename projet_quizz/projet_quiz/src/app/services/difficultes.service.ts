import {Host, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Difficultes} from "../models/difficultes";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DifficultesService {

  Host = environment.host;

  constructor(private http: HttpClient) {}

  getDifficulte(id: number): Observable<any> {
    var url = this.Host + 'difficultes?id_difficulte=eq.' + id;

    return this.http.get(url);
  }



}

