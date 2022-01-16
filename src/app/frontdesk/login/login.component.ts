import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { PeffrontdeskserviceService } from 'src/app/service/peffrontdeskservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employee: Employee;
  public hideLoginButton: boolean;
  public hideLoading: boolean;
  public hideErrorMessage: boolean;


  constructor(private pefffrontdeskservice: PeffrontdeskserviceService,
    private router: Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.hideLoginButton = false;
    this.hideLoading = true;
    this.hideErrorMessage = true;
  }

  submitLogin(loginForm){
    this.hideLoading = false;
    this.hideLoginButton = true;
    this.pefffrontdeskservice.authenticate(this.employee).subscribe(
      (res) => {
        if(res['data'] == "successful"){
          var employee = new Employee();
          employee.name = res['loggedInEmployee']['name'];
          employee.personId = res['loggedInEmployee']['personId'];
          employee.empId = res['loggedInEmployee']['empId'];
          this.pefffrontdeskservice.loggedInEmployee = employee;
          this.router.navigate(['mainPage','newVisitor']);
        }else{
          this.hideLoading = true;
          this.hideErrorMessage = false;
          this.hideLoginButton = false
        }
      },
      (err) => {});


































  }

}
