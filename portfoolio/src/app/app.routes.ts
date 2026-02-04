import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Work } from './work/work';
import { Hobbies } from './hobbies/hobbies';
import { NotFound } from './not-found/not-found';
import { Courses } from './courses/courses';

export const routes: Routes = [
{path: "", component: Home},
{path: "work", component: Work},
{path: "hobbies", component: Hobbies},
{path: "courses", component: Courses},
{path: "not-found", component: NotFound},
];
