import {Employee} from "./Employee/employee.js";
import {Customer} from "./Customer/customer.js";

let employee = new Employee('Jhon','Doe',40,'Manager');
employee.greet();

let customer = new Customer('Loura','Wilson',50,'USA')
customer.greet();
