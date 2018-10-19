import {Component} from '@angular/core';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'pm-root',
  templateUrl:'./app.component.html',
  providers:[ProductsService]          
})
export class AppComponent{
  pageTitle: string = 'Product Management System';
}