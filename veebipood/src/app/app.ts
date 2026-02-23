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

  tumeTeema = localStorage.getItem("IsDarkTheme") === "true"; //võtab localStorage'ist



   private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
      localStorage.setItem("keel", language);
  }

  tumdedaksTeemaks(kasTume: boolean) {

    this.tumeTeema = kasTume;
    //paneme localStorage'isse. 
    localStorage.setItem("IsDarkTheme", JSON.stringify(kasTume));
}
}

