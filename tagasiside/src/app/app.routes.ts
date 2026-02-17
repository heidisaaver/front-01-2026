import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tagasiside } from './tagasiside/tagasiside';

export const routes: Routes = [
    {path: " ", component: Home}, 
    {path: "tagasiside", component: Tagasiside}

];
