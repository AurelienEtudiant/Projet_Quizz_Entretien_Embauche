import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Questions} from "../models/questions";
import {ReponsesService} from "../services/reponses.service";
import {Reponses} from "../models/reponses";
import { Difficultes } from '../models/difficultes';
import {DifficultesService} from "../services/difficultes.service";


@Component({
  selector: 'app-survie',
  templateUrl: './survie.component.html',
  styleUrls: ['./survie.component.css']
})
export class SurvieComponent implements OnInit {
  z !: number;
  btn = 1;
  btn2 =-1;
  h !: number;
  toDisplay = true;
  joueurGagnant !: number;
  toDisplayBis = false;
  toDisplayButton = false;
  toDisplayButtonCat = false;
  toDisplayButtonNbJoueur = false;
  toDisplayButtonNbVie = false;
  toDisplayTer = false;
  toDisplayCin = false;
  name !: string;
  c !:number;
  joueursSupprimes !: Array<number>;
  a !: number;
  listeViesJoueurs !: number[];
  
  language = 'fr';
  displayLangEN = false;
  displayLangFR = true;
  score=10;
  question: Questions = <Questions>{};
  n!:number;
  numJoueur !: number;
  e !: number;
  joueur !: number;
  listeJoueurs !: number[];
  joueursSupprimes2 !: Array<number>;
  difficulte: Difficultes = <Difficultes>{};
  nbVie !: number;
  
  reponse1: Reponses = <Reponses>{};
  reponse2: Reponses = <Reponses>{};
  reponse3: Reponses = <Reponses>{};
  reponse4: Reponses = <Reponses>{};



  constructor(private translate:TranslateService, private questionsService: QuestionsService,
              private reponsesService: ReponsesService,
              private difficultesService: DifficultesService,

              )
  {
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
    this.name = "english";   
    
   

}




cliquer11(num : number){

  this.numJoueur ++;
  this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.e == 0){
 
    this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
    this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
    this.toDisplayBis = !this.toDisplayBis;
    this.toDisplayCin = true;
  }

while(this.listeViesJoueurs[this.numJoueur-1] == 0){
  this.numJoueur ++;
  if (this.numJoueur >=this.z){
    this.numJoueur = 1;
  }
  
}
if (this.numJoueur >=this.z){
  this.numJoueur = 1;
}
this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.reponse3.valid == true && num==3){
    if(this.listeJoueurs.length>1){

      if (this.c== 1|| this.c==2 || this.c==3){
        if(this.c==1){
        
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
         
            
            });
         
        }
        
        else if(this.c==3){ 
      
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
          });
         
        }
        else {
        if(this.c==2){
          
          this.questionsService.getQuestionSurv3().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
           
              
            });
         
          }
      }
}   
}
else{
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}
  }
  else {
    this.listeViesJoueurs[this.numJoueur-1] = this.listeViesJoueurs[this.numJoueur-1]-1;
    if(this.e == 0){
 
       
      this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
      this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
      this.toDisplayBis = !this.toDisplayBis;
      this.toDisplayCin = true;
   
    
    }
   
     
  
else{
  if (this.c== 1|| this.c==2 || this.c==3){
    if(this.c==1){
     
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
     
        
        });
     
    }
    
    else if(this.c==3){ 
    
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
      });
  
    }
    else {
    if(this.c==2){
     
      this.questionsService.getQuestionSurv3().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
       
          
        });
     
      }
      
    }

  
}  
}
    
if(this.listeJoueurs.length==1){
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}

  }
}
cliquer2(num : number){

  this.numJoueur ++;
  this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.e == 0){
 
    this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
    this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
    this.toDisplayBis = !this.toDisplayBis;
    this.toDisplayCin = true;
  }

while(this.listeViesJoueurs[this.numJoueur-1] == 0){
  this.numJoueur ++;
  if (this.numJoueur >=this.z){
    this.numJoueur = 1;
  }
  
}
if (this.numJoueur >=this.z){
  this.numJoueur = 1;
}
this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.reponse3.valid == true && num==3){
    if(this.listeJoueurs.length>1){

      if (this.c== 1|| this.c==2 || this.c==3){
        if(this.c==1){
        
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
         
            
            });
         
        }
        
        else if(this.c==3){ 
      
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
          });
         
        }
        else {
        if(this.c==2){
          
          this.questionsService.getQuestionSurv3().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
           
              
            });
         
          }
      }
}   
}
else{
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}
  }
  else {
    this.listeViesJoueurs[this.numJoueur-1] = this.listeViesJoueurs[this.numJoueur-1]-1;
    if(this.e == 0){
 
       
      this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
      this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
      this.toDisplayBis = !this.toDisplayBis;
      this.toDisplayCin = true;
   
    
    }
   
     
  
else{
  if (this.c== 1|| this.c==2 || this.c==3){
    if(this.c==1){
     
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
     
        
        });
     
    }
    
    else if(this.c==3){ 
    
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
      });
  
    }
    else {
    if(this.c==2){
     
      this.questionsService.getQuestionSurv3().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
       
          
        });
     
      }
      
    }

  
}  
}
    
if(this.listeJoueurs.length==1){
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}

  }
}
cliquer3(num : number){

  this.numJoueur ++;
  this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.e == 0){
 
    this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
    this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
    this.toDisplayBis = !this.toDisplayBis;
    this.toDisplayCin = true;
  }

while(this.listeViesJoueurs[this.numJoueur-1] == 0){
  this.numJoueur ++;
  if (this.numJoueur >=this.z){
    this.numJoueur = 1;
  }
  
}
if (this.numJoueur >=this.z){
  this.numJoueur = 1;
}
this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.reponse3.valid == true && num==3){
    if(this.listeJoueurs.length>1){

      if (this.c== 1|| this.c==2 || this.c==3){
        if(this.c==1){
        
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
         
            
            });
         
        }
        
        else if(this.c==3){ 
      
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
          });
         
        }
        else {
        if(this.c==2){
          
          this.questionsService.getQuestionSurv3().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
           
              
            });
         
          }
      }
}   
}
else{
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}
  }
  else {
    this.listeViesJoueurs[this.numJoueur-1] = this.listeViesJoueurs[this.numJoueur-1]-1;
    if(this.e == 0){
 
       
      this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
      this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
      this.toDisplayBis = !this.toDisplayBis;
      this.toDisplayCin = true;
   
    
    }
   
     
  
else{
  if (this.c== 1|| this.c==2 || this.c==3){
    if(this.c==1){
     
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
     
        
        });
     
    }
    
    else if(this.c==3){ 
    
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
      });
  
    }
    else {
    if(this.c==2){
     
      this.questionsService.getQuestionSurv3().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
       
          
        });
     
      }
      
    }

  
}  
}
    
if(this.listeJoueurs.length==1){
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}

  }
}

cliquer4(num : number){

  this.numJoueur ++;
  this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.e == 0){
 
    this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
    this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
    this.toDisplayBis = !this.toDisplayBis;
    this.toDisplayCin = true;
  }

while(this.listeViesJoueurs[this.numJoueur-1] == 0){
  this.numJoueur ++;
  if (this.numJoueur >=this.z){
    this.numJoueur = 1;
  }
  
}
if (this.numJoueur >=this.z){
  this.numJoueur = 1;
}
this.e = this.listeViesJoueurs[this.numJoueur-1];
  if(this.reponse3.valid == true && num==3){
    if(this.listeJoueurs.length>1){

      if (this.c== 1|| this.c==2 || this.c==3){
        if(this.c==1){
        
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
         
            
            });
         
        }
        
        else if(this.c==3){ 
      
          this.questionsService.getQuestionSurv().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
          });
         
        }
        else {
        if(this.c==2){
          
          this.questionsService.getQuestionSurv3().subscribe(question => {
            this.a = Math.floor(Math.random() * question.length);
            this.question = question[this.a];
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
              this.reponse1 = reponse1[0];
            });
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
              this.reponse2 = reponse2[1];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
              this.reponse3 = reponse3[2];
            });
            
            this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
              this.reponse4 = reponse4[3];
            });
           
              
            });
         
          }
      }
}   
}
else{
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
  this.toDisplayBis = !this.toDisplayBis;
}
  }
  else {
    this.listeViesJoueurs[this.numJoueur-1] = this.listeViesJoueurs[this.numJoueur-1]-1;
    if(this.e == 0){
 
       
      this.listeViesJoueurs.splice(this.numJoueur-1,this.numJoueur);
      this.listeJoueurs.slice(this.numJoueur-1,this.numJoueur);
      this.toDisplayBis = !this.toDisplayBis;
      this.toDisplayCin = true;
   
    
    }
   
     
  
else{
  if (this.c== 1|| this.c==2 || this.c==3){
    if(this.c==1){
     
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
     
        
        });
     
    }
    
    else if(this.c==3){ 
    
      this.questionsService.getQuestionSurv().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
      });
  
    }
    else {
    if(this.c==2){
     
      this.questionsService.getQuestionSurv3().subscribe(question => {
        this.a = Math.floor(Math.random() * question.length);
        this.question = question[this.a];
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
          this.reponse1 = reponse1[0];
        });
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
          this.reponse2 = reponse2[1];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
          this.reponse3 = reponse3[2];
        });
        
        this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
          this.reponse4 = reponse4[3];
        });
       
          
        });
     
      }
      
    }

  
}  
}
    
if(this.listeJoueurs.length==1){
  this.joueurGagnant = this.listeJoueurs[0];
  this.toDisplayTer = true;
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
  retourJeu(){
    this.toDisplayBis = true;
    this.toDisplayCin = !this.toDisplayCin;
   
  }

  erreurJoueur = false;
  nbJoueur ="";
  getJoueurValue(event:any){
    this.listeViesJoueurs = [];
    if (event.target.value >= 2 && event.target.value <= 10) {
      this.nbJoueur = event.target.value;
      this.toDisplayButtonNbJoueur = true;
      this.erreurJoueur = false;
      
    }else {
      this.erreurJoueur = true;
      this.toDisplayButtonNbJoueur = false;
      this.nbJoueur = "";
    }
  }

  erreurVie = false;
  
  getVieValue(event:any){
    
    this.listeViesJoueurs = [0,0,0,0,0,0,0,0,0,0];
    this.listeJoueurs = [1,2,3,4,5,6,7,8,9,10];
    this.z = parseInt(this.nbJoueur, 10)+1;
    if (event.target.value >= 2 && event.target.value <= 10) {
      this.nbVie = event.target.value;
      
      this.listeJoueurs.splice(this.z-1,10);
      this.toDisplayButtonNbVie = true;
      this.erreurVie = false;
      for(let d = 0; d < this.z-1; d++){
        this.listeViesJoueurs[d] = this.nbVie;
      }
      
     this.listeViesJoueurs.splice(this.z-1,10);

  
      
    }else {
      this.erreurVie = true;
      this.toDisplayButtonNbVie = false;
      this.nbVie = 0;
    }
  }
 
  reprise(){
    console.log(this.listeJoueurs);
   
    this.e = this.listeViesJoueurs[this.numJoueur-1];
    while(this.e == 0){
      this.numJoueur ++;
      this.e = this.listeViesJoueurs[this.numJoueur];
    }
     if (this.c== 1|| this.c==2 || this.c==3){
      if(this.c==1){
        this.difficultesService.getDifficulte(this.c).subscribe(difficulte =>{
        this.difficulte = difficulte;
        this.questionsService.getQuestionSurv().subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
            this.reponse1 = reponse1[0];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
            this.reponse2 = reponse2[1];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
            this.reponse3 = reponse3[2];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
            this.reponse4 = reponse4[3];
          });
       
          
          });
        });
      }
      
      else if(this.c==3){ 
      this.difficultesService.getDifficulte(this.c).subscribe(difficulte =>{
        this.difficulte = difficulte;
        this.questionsService.getQuestionSurv().subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
            this.reponse1 = reponse1[0];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
            this.reponse2 = reponse2[1];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
            this.reponse3 = reponse3[2];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
            this.reponse4 = reponse4[3];
          });
        });
        });
      }
      else {
      if(this.c==2){
        this.difficultesService.getDifficulte(this.c).subscribe(difficulte =>{
        this.difficulte = difficulte;
        this.questionsService.getQuestionSurv3().subscribe(question => {
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
            this.reponse1 = reponse1[0];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
            this.reponse2 = reponse2[1];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
            this.reponse3 = reponse3[2];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
            this.reponse4 = reponse4[3];
          });
         
            
          });
        });
        }
      
  
    }
  
  
    }
    
  }
  cliquer(){
    this.e = this.listeViesJoueurs[0];
    this.numJoueur = 1;
  }

  cliquer1(choix:number){
    this.c = choix;
  }

  cliquer10(){
      console.log(this.c)
      
      if (this.c ==1 || this.c == 2 || this.c == 3 ){
        if(this.c==1){
          this.difficultesService.getDifficulte(this.c).subscribe(difficulte =>{
            this.difficulte = difficulte;
            this.questionsService.getQuestionSurv().subscribe(question =>{
              this.a = Math.floor(Math.random() * question.length);
              
           
              
              this.question = question[this.a];
            
              
              this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
                this.reponse2 = reponse2[1]
              });
              this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
                this.reponse3 = reponse3[2];
              });
              this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
                this.reponse4 = reponse4[3];
              });
             this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
                this.reponse1 = reponse1[0];
              });
            });
          })
        
      }
      if(this.c==3){ 
        this.questionsService.getQuestionSurv3().subscribe(question =>{
          this.a = Math.floor(Math.random() * question.length);
          this.question = question[this.a];
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
            this.reponse1 = reponse1[0];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
            this.reponse2 = reponse2[1];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
            this.reponse3 = reponse3[2];
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
            this.reponse4 = reponse4[3];
          });
        });
    
      }
      else {
      if(this.c==2){
        
        this.questionsService.getQuestionSurv2().subscribe(question =>{
          this.a = Math.floor(Math.random() * question.length);
          
          this.question = question[this.a];
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse1 =>{
            
            this.reponse1 = reponse1[0];
            
          });
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse2 =>{
            this.reponse2 = reponse2[1];
            
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse3 =>{
            this.reponse3 = reponse3[2];
          });
          
          this.reponsesService.getReponse(this.question.id_question).subscribe(reponse4 =>{
            this.reponse4 = reponse4[3];
          });
         
            
          });
     
        }
      
        
    }

  
    }
    
    
  


 
    console.log(this.question)
    console.log(this.reponse1);
  }

}

