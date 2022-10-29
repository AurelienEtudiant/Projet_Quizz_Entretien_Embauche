import {Component, Input, OnInit} from '@angular/core';
import {Questions} from "../models/questions";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {QuestionsService} from "../services/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-questions-reponses',
  templateUrl: './gestion-questions-reponses.component.html',
  styleUrls: ['./gestion-questions-reponses.component.css']
})
export class GestionQuestionsReponsesComponent implements OnInit {

  @Input() questions!: Questions;
  Host = environment.host;
  question:Questions[];

  constructor(private httpClient: HttpClient, private questionsService: QuestionsService, private router:Router) {
    this.question = []
  }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(){
    this.httpClient.get<any>(this.Host+'questions').subscribe(
      result => {
        console.log(result);
        this.question = result;
      }
    )
  }


  onSubmitQuestions(){
    this.questionsService.postQuestion(this.questions)
      .subscribe(()=>this.router.navigate(['/gestionQuestionsReponses']));
  }

  onPatch(data:Questions){
    this.httpClient.patch<any>(this.Host+'questions',data).subscribe(
      result => {this.ngOnInit()}
    )
  }

}

