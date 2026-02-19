import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLinkWithHref, 
    TranslatePipe,
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('veebipood');

   private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }

}

