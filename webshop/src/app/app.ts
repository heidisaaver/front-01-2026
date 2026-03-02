import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, TranslatePipe, RouterLink, ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webshop');



  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
      localStorage.setItem("keel", language);
  }
}
