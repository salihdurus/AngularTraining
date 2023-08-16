import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Salih", "Dürüs", "asda@gmail.com", 156),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 156),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 156),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 156),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 156),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 156),
  ];
}
