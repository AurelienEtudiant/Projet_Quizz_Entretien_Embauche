import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Categories} from "../models/categories";
import {CategoriesService} from "../services/categories.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Questions} from "../models/questions";
import {ReponsesService} from "../services/reponses.service";
import {Reponses} from "../models/reponses";
import { Difficultes } from '../models/difficultes';
import {DifficultesService} from "../services/difficultes.service";


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  btn = 1;
  btn2 =10;
  toDisplay = true;
  toDisplayBis = false;
  toDisplayButton = false;
  toDisplayButtonCat = false;
  toDisplayTer = false;
  name !: string;
  c !:number;
  a !: number;
  language = 'fr';
  displayLangEN = false;
  displayLangFR = true;
  score=0;
  question: Questions = <Questions>{};
  n!:number;
c2 !: number;
  
  categorie: Categories = <Categories>{};

  
  reponse1: Reponses = <Reponses>{};
  reponse2: Reponses = <Reponses>{};
  reponse3: Reponses = <Reponses>{};
  reponse4: Reponses = <Reponses>{};



  constructor(private translate:TranslateService, private questionsService: QuestionsService,
              private route: ActivatedRoute, private categoriesService:CategoriesService
              )
  {
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    this.name = "english";   


}

cliquer11(num : number){
   console.log(this.question)
  if(this.btn!=10){
    this.score+=num;
    this.btn+=1;
    if (this.c2 == 1|| this.c2==2 || this.c2 ==3){
      if(this.c2==1){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval2(categorie[0].id_categorie,1).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
       
          
          });
        });
      }
      
      else if(this.c2==3){ 
      this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
        });
        });
      }
      else {
      if(this.c2==2){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval3(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
         
            
          });
        });
        }
    
  
    }
  }
   
  }

  else{
    if (this.btn2==10){
      this.score+=num;
      this.btn2+=1;
      this.toDisplayTer = !this.toDisplayTer;
      this.toDisplayBis = !this.toDisplayBis;
      
    
    



  }
}
  

   

    
  }

  changeLanguage(): void{
    if (this.language === 'fr'){
      this.language = 'en';
      this.name = "frensh";
      this.displayLangEN = true;
      this.displayLangFR = false;
    }else {
      this.language = 'fr';
      this.name = "english";
      this.displayLangFR = true;
      this.displayLangEN = false;
    }
    this.translate.use(this.language);
  }

  toggleData(){
    this.toDisplay = !this.toDisplay;
    this.toDisplayBis = !this.toDisplayBis;
    

  }
  cli(choix2:number){
    this.c2 = choix2;
  }
  cliquer1(choix:number){
    this.c = choix;
    console.log(this.question)
  }
  cliquer2(){
    
     if (this.c2 == 1|| this.c2==2 || this.c2 ==3){
      if(this.c2==1){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval2(categorie[0].id_categorie,1).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
       
          
          });
        });
      }
      
      else if(this.c2==3){ 
      this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
        });
        });
      }
      else {
      if(this.c2==2){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionEval3(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
         
            
          });
        });
        }
      
     
    }
  
  
    }
    
    
     
    
     
 
    console.log(this.question)
  }
 
}
  
  



