import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { Kontaktid } from './kontaktid/kontaktid';
import { Meist } from './meist/meist';
import { Seaded } from './seaded/seaded';

export const routes: Routes = [
    {path: "avaleht", component: Avaleht},
    {path: "kontaktid", component: Kontaktid},
    {path: "meist", component: Meist},
    {path: "seaded", component: Seaded}

];
