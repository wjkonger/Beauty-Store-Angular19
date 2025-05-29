import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "product-detail/:id", loadComponent: ()=>import("./product-detail/product-detail.component").then(c=>c.ProductDetailComponent)},
    {path: "shopping-cart", loadComponent: ()=>import("./shopping-cart/shopping-cart.component").then(c=>c.ShoppingCartComponent)},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: ProductListComponent}

    
];
