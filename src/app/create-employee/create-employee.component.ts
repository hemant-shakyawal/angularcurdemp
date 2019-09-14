import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
  }
newemployee(){
  this.submitted=false;
 this.employee = new Employee();

}
save(){
  this.empservice.createemployee(this.employee)
  .subscribe(
     data => console.log(data),
   error=> console.error(error)
  );
  this.employee=new Employee();
}

onSubmit(){
  this.submitted=true;
  this.save();
}


}
