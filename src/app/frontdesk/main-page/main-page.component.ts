import { Component, OnInit } from '@angular/core';
import { PeffrontdeskserviceService } from 'src/app/service/peffrontdeskservice.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public loggedInEmployeeName: string = null;

  constructor(private peffrontdeskservice: PeffrontdeskserviceService) { }

  ngOnInit(): void {
    this.loggedInEmployeeName = this.peffrontdeskservice.loggedInEmployee.name;
  }

}
