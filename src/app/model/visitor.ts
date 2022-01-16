import { Person } from "./person";

export class Visitor extends Person {
  nationalId: string;
  visitorId: number;

  static fromAllVisitorValues(nationalId: string,visitorId: number){
    var visitor = new Visitor();
    visitor.nationalId = nationalId;
    visitor.visitorId = visitorId;
  }
}
