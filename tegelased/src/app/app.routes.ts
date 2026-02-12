import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { LisaTegelane } from './lisa-tegelane/lisa-tegelane';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: "", component: Avaleht},
    {path: "lisa-tegelane", component: LisaTegelane},
    {path: "**", component: NotFound}
   
];
