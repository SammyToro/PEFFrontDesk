export class Person {

  public name: string;
  public phoneNo: string;
  public email: string;
  public gender: string;
  public personId: number;

  static fromAllValues(name: string,phoneNo: string,email: string,gender: string,personId?: number){
    var person = new Person();
    person.name = name;
    person.phoneNo = phoneNo;
    person.email = email;
    person.gender = gender;
    person.personId = personId;
  }
}

