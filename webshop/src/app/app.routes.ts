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
import { ProductDetails } from './product-details/product-details';
import { Map } from './map/map';
import { OneProduct } from './one/one-product/one-product';

export const routes: Routes = [

    {path: "", component: HomePage},
    {path: "add-product", component: AddProduct},
    {path: "admin-home", component: AdminHome},
    {path: "edit-product/:index", component: EditProduct},
    {path: "manage-categories", component: ManageCategories},
    {path: "manage-products", component: ManageProducts},
    {path: "cart", component: Cart},
    {path: "contact-us", component: ContactUsComponent},
    {path: "home-page", component: HomePage},
    {path: "not-found", component: NotFound},
    {path: "shops", component: Shops},
    {path: "product-details", component: ProductDetails},
    {path: "map", component: Map},
    {path: "product/:product_id", component: OneProduct},


    {path: "**", component: NotFound},



];
