import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // constructor(private authService: AuthService) {}
  //private router: Router

  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.isLoggedIn.next(true);  //.next ütleb, et kes "kuulab" seda muutujat, see peab käivituma
    this.router.navigateByUrl("/admin-home");
    sessionStorage.setItem("token", "token123");
  } 
}
