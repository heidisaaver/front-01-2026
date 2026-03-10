import { Routes } from '@angular/router';
import { AddProduct } from './admin/add-product/add-product';
import { AdminHome } from './admin/admin-home/admin-home';
import { EditProduct } from './admin/edit-product/edit-product';
import { ManageCategories } from './admin/manage-categories/manage-categories';
import { ManageProducts } from './admin/manage-products/manage-products';
import { Cart } from './cart/cart';
import { ContactUsComponent } from './contact-us/contact-us.compnent';
import { HomePage } from './home-page/home-page';
import { NotFound } from './not-found/not-found';
import { Shops } from './shops/shops';
import { Map } from './map/map';
import { OneProduct } from './one/one-product/one-product';
import { authGuard } from './guards/auth-guard';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';

export const routes: Routes = [
    {path: "", component: HomePage},
    {path: "add-product", component: AddProduct},
    {path: "admin-home", component: AdminHome, canActivate: [authGuard]},
    {path: "edit-product/:id", component: EditProduct, canActivate: [authGuard]},
    {path: "manage-categories", component: ManageCategories, canActivate: [authGuard]},
    {path: "manage-products", component: ManageProducts, canActivate: [authGuard]},
    {path: "cart", component: Cart},
    {path: "contact-us", component: ContactUsComponent},
    {path: "home-page", component: HomePage},
    {path: "not-found", component: NotFound},
    {path: "shops", component: Shops},
    {path: "map", component: Map},
    {path: "product/:product_id", component: OneProduct},
    {path: "login", component: Login},
    {path: "signup", component: Signup},
    {path: "**", component: NotFound},
];
