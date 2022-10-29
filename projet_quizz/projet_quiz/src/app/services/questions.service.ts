import {Host, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Questions} from "../models/questions";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  Host = environment.host;

  constructor(private http: HttpClient) {}


  getQuestionEval(choix : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&eval_mode=eq.true';
    return this.http.get(url);
  }
  getQuestionEval2(choix : number, choix2 : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&eval_mode=eq.true'+'&id_difficulte=eq.'+choix2;
    return this.http.get(url);
  }

  getQuestionEval3(choix : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&or=(id_difficulte.eq.1,id_difficulte.eq.2)';
    return this.http.get(url);
  }
  getQuestionTraining(choix : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&eval_mode=eq.true';
    return this.http.get(url);
  }
  getQuestionTraining2(choix : number, choix2 : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&eval_mode=eq.true&id_difficulte=eq.'+choix2;
    return this.http.get(url);
  }

  getQuestionTraining3(choix : number): Observable<any> {
    var url = this.Host +'questions?id_categorie=eq.'+choix+'&or=(id_difficulte.eq.1,id_difficulte.eq.2)';
    return this.http.get(url);
  }
  getQuestionSurv(): Observable<any> {
    var url = this.Host +'questions?id_difficulte=eq.1&survival_mode=eq.true';
    return this.http.get(url);
  }

  getQuestionSurv3(): Observable<any> {
    var url = this.Host +'questions?or=(id_difficulte.eq.1,id_difficulte.eq.2,id_difficulte.eq.3)&survival_mode=eq.true';
    return this.http.get(url);
  }
  getQuestionSurv2(): Observable<any> {
    var url = this.Host +'questions?or=(id_difficulte.eq.1,id_difficulte.eq.2)&survival_mode=eq.true';
    return this.http.get(url);
  }

  postQuestion(data: Questions): Observable<Questions> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post<Questions>(this.Host+'questions', data).pipe(
      tap((reponse)=> this.log(reponse))
    );
  }


  updateQuestion(data: Questions): any {
    const url = this.Host+'questions';
    this.http.put<any>(url, data);
  }

  private log(reponse:any){
    console.table(reponse);
  }
}

