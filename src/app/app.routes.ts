import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "product-list/:term", component: ProductListComponent},
    {path: "product-detail/:id", loadComponent: ()=>import("./product-detail/product-detail.component").then(c=>c.ProductDetailComponent)},
    {path: "shopping-cart", loadComponent: ()=>import("./shopping-cart/shopping-cart.component").then(c=>c.ShoppingCartComponent)},
    {path: "check-out", loadComponent: ()=>import("./check-out/check-out.component").then(c=>c.CheckOutComponent)},
    {path: "order-confirmation", loadComponent: ()=>import("./order-confirmation/order-confirmation.component").then(c=>c.OrderConfirmationComponent)},
    {path: "about", loadComponent: ()=>import("./about/about.component").then(c=>c.AboutComponent)},
    {path: "contact", loadComponent: ()=>import("./contact/contact.component").then(c=>c.ContactComponent)},
    {path: "**", component: ProductListComponent}

    
];
