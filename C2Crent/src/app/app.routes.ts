import { Routes } from '@angular/router';
import { AddProduct } from './add-product/add-product';
import { Login } from './auth/login/login';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';
import { AdminUsers } from './admin/admin-users/admin-users';
import { AdminProducts } from './admin/admin-products/admin-products';
import { Rentalproducts } from './rentalproducts/rentalproducts';
import { AdminProductlist } from './admin/admin-productlist/admin-productlist';
import { AdminCategories } from './admin/admin-categories/admin-categories';
import { Contacts } from './contacts/contacts';
import { authGuard } from './guards/auth-guards';
import { Rendiseade } from './rendiseade/rendiseade';

export const routes: Routes = [

    {path: "", component:  Rentalproducts},
    {path: "rendiseadmed", component: Rentalproducts},
    {path: "lisa-seade", component: AddProduct},
    {path: "kontakt", component: Contacts},
    {path: "logisisse", component: Login},
    {path: "rendiseade/:product_id", component: Rendiseade},
    {path: "seadmete-nimekiri", component: AdminProductlist, canActivate: [authGuard]},
    {path: "halda-seadmeid/:id", component: AdminProducts, canActivate: [authGuard]},
    {path: "halda-kategooriaid", component: AdminCategories, canActivate: [authGuard]},
    {path: "halda-kasutajaid", component: AdminUsers, canActivate: [authGuard]},
    {path: "rendikorv", component: Cart},
    {path: "**", component: NotFound},


];
