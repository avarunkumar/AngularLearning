import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../Interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  data

  constructor(private http:HttpClient) {


   }

   getCustomerDetails()
   {
      
     return this.http.get<Course[]>('https://jsonplaceholder.typicode.com/posts')
   }
}
