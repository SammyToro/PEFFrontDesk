import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public hideNewPasswordArea: boolean;
  public hidePhoneNoArea: boolean;
  public hidePhoneLoading: boolean;
  public hidePhoneDone: boolean;
  public hidePasswordLoading: boolean;
  public hidePasswordDone: boolean;

  constructor() { }

  ngOnInit(): void {
    this.hideNewPasswordArea = true;
    this.hidePhoneNoArea = false;
    this.hidePhoneLoading = true;
    this.hidePhoneDone = false;
    this.hidePasswordLoading = true;
    this.hidePasswordDone = false;
  }

}
