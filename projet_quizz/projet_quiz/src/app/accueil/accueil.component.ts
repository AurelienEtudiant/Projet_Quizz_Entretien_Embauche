import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'Projet_Quizz';
  language = 'fr';
  name !: string;

  ngOnInit(){
    this.name = "english";
  }

  constructor(private translate:TranslateService) {
    translate.setDefaultLang(this.language);
  }

  changeLanguage(): void{
    if (this.language === 'fr'){
      this.language = 'en';
      this.name = "frensh";
    }else {
      this.language = 'fr';
      this.name = "english";
    }
    this.translate.use(this.language);
  }

}
