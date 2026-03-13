import { Routes } from '@angular/router';
import { Rendiseadmed } from './rendiseadmed/rendiseadmed';
import { LisaSeade } from './lisa-seade/lisa-seade';
import { Logisisse } from './logisisse/logisisse';
import { HaldaSeadmed } from './halda/halda-seadmed/halda-seadmed';
import { HaldaKasutajad } from './halda/halda-kasutajad/halda-kasutajad';
import { Rendikorv } from './rendikorv/rendikorv';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

    {path: "", component: Rendiseadmed},
    {path: "rendiseadmed", component: Rendiseadmed},
    {path: "lisa-seade", component: LisaSeade},
    {path: "logisisse", component: Logisisse},
    {path: "halda-seadmeid", component: HaldaSeadmed},
    {path: "halda-kasutajaid", component: HaldaKasutajad},
    {path: "rendikorv", component: Rendikorv},
    {path: "**", component: NotFound},


];
