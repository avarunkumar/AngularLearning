import { Course } from './Interface/customer';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerServiceService } from './Services/customer-service.service';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { GetCustomerDetailsComponent } from './get-customer-details/get-customer-details.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.doubleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    GetCustomerDetailsComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    MatFormFieldModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    RouterModule.forRoot(
[

  {path: 'GetCustomerDetails',  component: GetCustomerDetailsComponent},
    {path: 'CreateCustomer', component:CustomerRegistrationComponent}
    
]

    )
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
