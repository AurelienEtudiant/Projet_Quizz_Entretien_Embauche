import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string='Vous êtes déconnecté';
  email!:string;
  password!:string;
  auth!: AuthService;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(){
    if (this.auth.isLoggedIn){
      this.message = 'vous êtes conncté';
    }else {
      this.message = 'identifiant ou mot de passe incorrect. Seul les administrateurs peuvent se connecter';
    }
  }

  login(){
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.email, this.password)
      .subscribe((isLoggedIn:boolean)=>{
        this.setMessage();
        if (isLoggedIn){
          this.router.navigate(['/gestionQuestionsReponses']);
        }else {
          this.password = '';
          this.router.navigate(['/login'])
        }
      })
  }

  logout(){
    this.auth.logout();
    this.message = "vous êtes déconnecté"
  }

}
