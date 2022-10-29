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
  selector: 'app-entrainement',
  templateUrl: './entrainement.component.html',
  styleUrls: ['./entrainement.component.css']
})
export class EntrainementComponent implements OnInit {
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
  toDisplayQua = false;
  categorie: Categories = <Categories>{};

  toDisplayCin = false;
  reponse1: Reponses = <Reponses>{};




  constructor(private translate:TranslateService, private questionsService: QuestionsService,
              private reponsesService: ReponsesService,
              private route: ActivatedRoute, private categoriesService:CategoriesService
              )
  {
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    this.name = "english";   


}

cliquer12(){
   this.toDisplayBis = !this.toDisplayBis;
   this.toDisplayTer = true;
  if (this.btn == 10){
      this.toDisplayQua = true;
      this.toDisplayTer = !this.toDisplayTer;
  
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
    console.log(this.c2);
  }
  cliquer1(choix:number){
    this.c = choix;
  }
  cliquer2(){
    
     if (this.c2 == 1|| this.c2==2 || this.c2 ==3){
      if(this.c2==1){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionTraining2(categorie[0].id_categorie,1).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          console.log(question);
          this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
           
            this.reponse1 = reponse1[0];
          });
       
          
          });
        });
      }
      
      else if(this.c2==3){ 
      this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionTraining(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
            console.log(reponse1);
            this.reponse1 = reponse1[0];
          });
        });
        });
      }
      else {
      if(this.c2==2){
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
        this.categorie = categorie;
        this.questionsService.getQuestionTraining3(categorie[0].id_categorie).subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
            console.log(reponse1);
            this.reponse1 = reponse1[0];
          });
         
            
          });
        });
        }
      
  
    }
  console.log(this.question)
  
    }
  }
  cliquer13(){
    if(this.btn!=10){

      this.btn+=1;
      this.toDisplayBis= true;
      this.toDisplayTer =!this.toDisplayTer;
      if (this.c2 == 1|| this.c2==2 || this.c2 ==3){
        if(this.c2==1){
          this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
          this.categorie = categorie;
          this.questionsService.getQuestionTraining2(categorie[0].id_categorie,1).subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
              console.log(reponse1);
              this.reponse1 = reponse1[0];
            });
         
            
            });
          });
        }
        
        else if(this.c2==3){ 
        this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
          this.categorie = categorie;
          this.questionsService.getQuestionTraining(categorie[0].id_categorie).subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
              console.log(reponse1);
              this.reponse1 = reponse1[0];
            });
          });
          });
        }
        else {
        if(this.c2==2){
          this.categoriesService.getCategorie(this.c).subscribe(categorie =>{
          this.categorie = categorie;
          this.questionsService.getQuestionTraining3(categorie[0].id_categorie).subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponseTrue(this.question.id_question).subscribe(reponse1 =>{
              console.log(reponse1);
              this.reponse1 = reponse1[0];
            });
           
              
            });
          });
          }
  }
      }
    }
    console.log(this.question)
  }

  cliquer14(){
    this.toDisplayQua = !this.toDisplayQua;
    this.toDisplayCin = true;

  }
}
