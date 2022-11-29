import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../Services/customer-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Course } from '../Interface/customer';

@Component({
  selector: 'app-get-customer-details',
  templateUrl: './get-customer-details.component.html',
  styleUrls: ['./get-customer-details.component.css']
})
export class GetCustomerDetailsComponent  {

  constructor(private custService:CustomerServiceService,private ngxService: NgxUiLoaderService)
  {

  }
  public data: Course[];
  
  getDetails(){
    this.data = [];
    this.ngxService.start();
    

    setTimeout(() => {
      this.custService.getCustomerDetails().subscribe(
      response => { this.data = response; console.log(this.data); })
      this.ngxService.stop(); 
    }, 500);
     
    console.log('Get Details')
    
  }
}
