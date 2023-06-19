import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AboutUsComponent} from './component/about-us/about-us.component';
import {ContactUsComponent} from './component/contact-us/contact-us.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {CustomerCartComponent} from './component//customer/customer-cart/customer-cart.component';
import {CustomerSignUpComponent} from './component/customer/customer-signup/customer-signup.component';
import {CustomerLoginComponent} from './component/customer/customer-login/customer-login.component';
import {CustomerHeaderComponent} from './component/customer/customer-header/customer-header.component';
import {CustomerHomeComponent} from './component/customer/customer-home/customer-home.component';
import {CustomerOrderComponent} from './component/customer/customer-order/customer-order.component';
import {CustomerPaymentComponent} from './component/customer/customer-payment/customer-payment.component';
import {CustomerShowitemlistComponent} from './component/customer/customer-showitemlist/customer-showitemlist.component';
import {AdminLoginComponent} from './component/admin/admin-login/admin-login.component';
import {AdminAdditemComponent} from './component/admin/admin-additem/admin-additem.component';
import {AdminHeaderComponent} from './component/admin/admin-header/admin-header.component';
import {AdminHomeComponent} from './component/admin/admin-home/admin-home.component';
import {AdminItemlistComponent} from './component/admin/admin-itemlist/admin-itemlist.component';
const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'about-us',component:AboutUsComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'change-password',component:ChangePasswordComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'customer-login',component:CustomerLoginComponent},
{path:'customer-register',component:CustomerSignUpComponent},

{path:'customer',children:[
    {path:'cart',component:CustomerCartComponent},
    {path:'home',component:CustomerHomeComponent},
    // {path:'customer-header',component:CustomerHeaderComponent},
    {path:'order',component:CustomerOrderComponent},
    {path:'payment/:orderId/:totalPrice',component:CustomerPaymentComponent},
    // {path:'customer-showitemlist',component:CustomerShowitemlistComponent},
   
    
]},
{path:'admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path:'additem',component:AdminAdditemComponent},
    {path:'itemlist',component:AdminItemlistComponent},
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
