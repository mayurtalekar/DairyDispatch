import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FoodQuantityComponent } from './food-quantity/food-quantity.component';
import { ContactComponent } from './contact/contact.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { PaymentMathodComponent } from './payment-mathod/payment-mathod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    HomeComponent,
    DetailsComponent,
    FoodQuantityComponent,
    ContactComponent,
    OtpVerificationComponent,
    UserInformationComponent,
    PaymentMathodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
