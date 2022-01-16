import { Person } from "./person";

export class Employee extends Person{

  public username: string;
  public pword: string;
  public empId: number;



  static fromNameAndEmpId(name: string,empId: number){
    var employee = new Employee();
    employee.name = name;
    employee.empId = empId
  }
}
