import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: ProductListComponent},
    {path: "home", component: HomeComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "product-detail/:id", component: ProductDetailComponent},
    {path: "about", component: ProductDetailComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: ProductListComponent}
];
