import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: Observable<Employee[]>;

collection = [];
  constructor(private empservice: EmployeeService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  ngOnInit() {
    this.loaddata();
  }
loaddata() {
 this.employees = this.empservice.getemployee();

}
}
