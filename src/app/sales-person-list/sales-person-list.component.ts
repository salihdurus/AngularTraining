import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Salih", "Dürüs", "asda@gmail.com", 150),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 250),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 350),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 450),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 550),
    new SalesPerson("Ali", "Dürüs", "asda@gmail.com", 650),
  ];
}
