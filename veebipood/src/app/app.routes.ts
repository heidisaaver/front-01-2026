import { Routes } from '@angular/router';
import { Avaleht } from './avaleht/avaleht';
import { Kinkekaart } from './kinkekaart/kinkekaart';
import { Ostukorv } from './ostukorv/ostukorv';
import { Seaded } from './seaded/seaded';
import { NotFound } from './not-found/not-found';
import { Esindused } from './arrays/esindused/esindused';
import { Tavakalkulaator } from './kalkulaator/tavakalkulaator/tavakalkulaator';
import { Laenukalkulaator } from './kalkulaator/laenukalkulaator/laenukalkulaator';
import { Maksimaalnekalkulaator } from './kalkulaator/maksimaalnekalkulaator/maksimaalnekalkulaator';
import { ArrayHome } from './arrays/array-home/array-home';
import { Autod } from './arrays/autod/autod';
import { Hinnad } from './arrays/hinnad/hinnad';
import { Kasutajad } from './arrays/kasutajad/kasutajad';
import { Tootajad } from './arrays/tootajad/tootajad';
import { Tooted } from './arrays/tooted/tooted';
import { HaldaHome } from './halda/halda-home/halda-home';
import { HaldaAutod } from './halda/halda-autod/halda-autod';
import { HaldaHinnad } from './halda/halda-hinnad/halda-hinnad';
import { HaldaKasutajad } from './halda/halda-kasutajad/halda-kasutajad';
import { HaldaTootajad } from './halda/halda-tootajad/halda-tootajad';
import { HaldaTooted } from './halda/halda-tooted/halda-tooted';
import { HaldaEsindused } from './halda/halda-esindused/halda-esindused';
import { LisaHome } from './lisa/lisa-home/lisa-home';
import { LisaAutod } from './lisa/lisa-autod/lisa-autod';
import { LisaEsindused } from './lisa/lisa-esindused/lisa-esindused';
import { LisaHinnad } from './lisa/lisa-hinnad/lisa-hinnad';
import { LisaKasutajad } from './lisa/lisa-kasutajad/lisa-kasutajad';
import { LisaTootajad } from './lisa/lisa-tootajad/lisa-tootajad';
import { LisaToode } from './lisa/lisa-toode/lisa-toode';



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
    {path: "ostukorv", component: Ostukorv},
    {path: "seaded", component: Seaded},
    {path: "tavakalkulaator", component: Tavakalkulaator},
    {path: "laenukalkulaator", component: Laenukalkulaator},
    {path: "maksimaalnekalkulaator", component: Maksimaalnekalkulaator},
  
    {path: "arrays", component: ArrayHome},
    {path: "autod", component: Autod},
    {path: "esindused", component: Esindused},
    {path: "hinnad", component: Hinnad},
    {path: "kasutajad", component: Kasutajad},
    {path: "tootajad", component: Tootajad},
    {path: "tooted", component: Tooted},
    
    {path: "halda", component: HaldaHome},
    {path: "halda-autod", component: HaldaAutod},
    {path: "halda-esindused", component: HaldaEsindused},
    {path: "halda-hinnad", component: HaldaHinnad},
    {path: "halda-kasutajad", component: HaldaKasutajad},
    {path: "halda-tootajad", component: HaldaTootajad},
    {path: "halda-tooted", component: HaldaTooted},

    {path: "lisa", component: LisaHome},
    {path: "lisa-autod", component: LisaAutod},
    {path: "lisa-esindused", component: LisaEsindused},
    {path: "lisa-hinnad", component: LisaHinnad},
    {path: "lisa-kasutajad", component: LisaKasutajad},
    {path: "lisa-tootajad", component: LisaTootajad},
    {path: "lisa-toode", component: LisaToode},


    {path: "**", component: NotFound},

];
