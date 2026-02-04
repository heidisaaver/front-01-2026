import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { Kontakt } from './kontakt/kontakt';
import { Meist } from './meist/meist';
import { Uudised } from './uudised/uudised';
import { LisaUudis } from './lisa-uudis/lisa-uudis';



export const routes: Routes = [
   {path: "", component: Avaleht},
   {path: "kontakt", component: Kontakt},
   {path: "meist", component: Meist},
   {path: "uudised", component: Uudised},
   {path: "lisa-uudis", component: LisaUudis}
];
