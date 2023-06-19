import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { CustomerSignUpComponent } from './component/customer/customer-signup/customer-signup.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AdminAdditemComponent } from './component/admin/admin-additem/admin-additem.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminItemlistComponent } from './component/admin/admin-itemlist/admin-itemlist.component';
import { CustomerCartComponent } from './component/customer/customer-cart/customer-cart.component';
import { CustomerHeaderComponent } from './component/customer/customer-header/customer-header.component';
import { CustomerHomeComponent } from './component/customer/customer-home/customer-home.component';
import { CustomerOrderComponent } from './component/customer/customer-order/customer-order.component';
import { CustomerPaymentComponent } from './component/customer/customer-payment/customer-payment.component';
import { CustomerShowitemlistComponent } from './component/customer/customer-showitemlist/customer-showitemlist.component';
import { CustomerLoginComponent } from './component/customer/customer-login/customer-login.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { PagingComponent } from './component/paging/paging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatSliderModule} from '@angular/material/slider';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerOrderHistoryComponent } from './component/customer/customer-order-history/customer-order-history.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    AdminLoginComponent,
    CustomerSignUpComponent,
    ContactUsComponent,
    AdminAdditemComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminItemlistComponent,
    CustomerCartComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    CustomerOrderComponent,
    CustomerPaymentComponent,
    CustomerShowitemlistComponent,
    CustomerLoginComponent,
    AppHeaderComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    PagingComponent,
    CustomerOrderHistoryComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
