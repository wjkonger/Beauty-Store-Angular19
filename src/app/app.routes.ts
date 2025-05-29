import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: "", component: ProductListComponent},
    {path: "home", component: HomeComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "product-detail/:id", loadComponent: ()=>import("./product-detail/product-detail.component").then(c=>c.ProductDetailComponent)},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: ProductListComponent}
];
