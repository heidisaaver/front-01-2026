import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { Component } from '@angular/core';
import { Arvutid } from './arvutid/arvutid';
import { Lisamine } from './lisamine/lisamine';

export const routes: Routes = [
    {path: "", component: Avaleht },
    {path: "arvutid", component: Arvutid},
    {path: "lisamine", component: Lisamine},
];
