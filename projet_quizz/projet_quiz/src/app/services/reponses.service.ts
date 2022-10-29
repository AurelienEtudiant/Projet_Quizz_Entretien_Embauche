import {Host, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Reponses} from "../models/reponses";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReponsesService {

  Host = environment.host;

  constructor(private http: HttpClient) {}

  getReponse(choix : number): Observable<any> {
    var url = this.Host +'reponses?id_question=eq.'+choix;
    return this.http.get(url);
  }
  getReponseTrue(choix : number): Observable<any> {
    var url = this.Host +'reponses?id_question=eq.'+choix+'&valid=eq.true';
    return this.http.get(url);
  }



}
