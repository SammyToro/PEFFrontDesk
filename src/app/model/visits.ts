import { Employee } from "./employee";
import { Visitor } from "./visitor";

export class Visits {
  public purpose: string;
  public timeIn: string;
  public timeOut: string;
  public visitId: number;
  public employeeToSee = new Employee();
  public visitor = new Visitor();
}
