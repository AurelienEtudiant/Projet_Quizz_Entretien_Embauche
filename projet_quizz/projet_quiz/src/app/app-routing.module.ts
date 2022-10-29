import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrainementComponent} from "./entrainement/entrainement.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {SurvieComponent} from "./survie/survie.component";
import {EvaluationComponent} from "./evaluation/evaluation.component";
import {GestionQuestionsReponsesComponent} from "./gestion-questions-reponses/gestion-questions-reponses.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'entrainement', component: EntrainementComponent},
  {path: 'survie', component: SurvieComponent},
  {path: 'evaluation', component: EvaluationComponent},
  {path: 'gestionQuestionsReponses', component: GestionQuestionsReponsesComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
