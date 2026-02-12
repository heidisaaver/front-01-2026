import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { Kinkekaart } from './kinkekaart/kinkekaart';
import { LisaToode } from './lisa-toode/lisa-toode';
import { Ostukorv } from './ostukorv/ostukorv';
import { Seaded } from './seaded/seaded';
import { NotFound } from './not-found/not-found';
import { Esindused } from './esindused/esindused';
import { Tavakalkulaator } from './kalkulaator/tavakalkulaator/tavakalkulaator';
import { Laenukalkulaator } from './kalkulaator/laenukalkulaator/laenukalkulaator';
import { Maksimaalnekalkulaator } from './kalkulaator/maksimaalnekalkulaator/maksimaalnekalkulaator';
import { ArrayHome } from './arrays/array-home/array-home';
import { Autod } from './arrays/autod/autod';
import { Hinnad } from './arrays/hinnad/hinnad';
import { Kasutajad } from './arrays/kasutajad/kasutajad';
import { Tootajad } from './arrays/tootajad/tootajad';
import { Tooted } from './arrays/tooted/tooted';

// BASE_URL --> http://localhost:4200
// BASE_URL --> http//telia.ee/esindused
//{path: "url, mis järgneb BASE_URL-le"}
//    component: kaust, mille kasutusele võtan (peab importima)

// html --> välja näitamiseks
// css -->  kujunamiseks
//.ts --> fail dünaamika tekitamiseks

export const routes: Routes = [
    {path: "", component: Avaleht},
    {path: "esindused", component: Esindused},
    {path: "osta-kinkekaart", component: Kinkekaart},
    {path: "lisa-toode", component:LisaToode},
    {path: "ostukorv", component: Ostukorv},
    {path: "seaded", component: Seaded},
    {path: "tavakalkulaator", component: Tavakalkulaator},
    {path: "laenukalkulaator", component: Laenukalkulaator},
    {path: "maksimaalnekalkulaator", component: Maksimaalnekalkulaator},
  
    {path: "arrays", component: ArrayHome},
    {path: "autod", component: Autod},
    {path: "hinnad", component: Hinnad},
    {path: "kasutajad", component: Kasutajad},
    {path: "tootajad", component: Tootajad},
    {path: "tooted", component: Tooted},

    {path: "**", component: NotFound},

];
