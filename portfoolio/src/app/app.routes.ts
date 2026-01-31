import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Work } from './work/work';
import { Hobbies } from './hobbies/hobbies';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
{path: "", component: Home},
{path: "work", component: Work},
{path: "hobbies", component: Hobbies},
{path: "not-found", component: NotFound},
];
