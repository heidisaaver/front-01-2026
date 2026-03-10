import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, TranslatePipe, RouterLink, MatIconModule, MatButtonModule, MatToolbarModule ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webshop');

  private translate = inject(TranslateService);
  isLoggedIn!: boolean;
  // constructor(private authService: AuthService) {}

  private authService = inject(AuthService); //töötab samuti nagu ülemine väljakommenteeritud, inject ei tööta vanades (alla 16.) versioonides
  private router = inject(Router);

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedInNewValue =>
      this.isLoggedIn = loggedInNewValue
    );
  } //.subscribe kuulab .next vajutusi

  logout() {
    this.authService.isLoggedIn.next(false);
    this.router.navigateByUrl("/");
    sessionStorage.removeItem("token");
  }

  useLanguage(language: string): void {
      this.translate.use(language);
      localStorage.setItem("keel", language);
  }
}
