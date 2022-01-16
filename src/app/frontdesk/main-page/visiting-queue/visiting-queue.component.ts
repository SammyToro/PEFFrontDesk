import { Component, OnInit } from '@angular/core';
import { Visits } from 'src/app/model/visits';
import { PeffrontdeskserviceService } from 'src/app/service/peffrontdeskservice.service';

@Component({
  selector: 'app-visiting-queue',
  templateUrl: './visiting-queue.component.html',
  styleUrls: ['./visiting-queue.component.css']
})
export class VisitingQueueComponent implements OnInit {

  public visits: Visits[];
  error  = '';

  constructor(private peffrontdeskservice: PeffrontdeskserviceService) { }

  ngOnInit(): void {
    this.getActiveVisits();
  }

  getActiveVisits(): void{
    this.peffrontdeskservice.getActiveVisits().subscribe(
      (res) => {
        this.visits = res;
        console.log(this.visits);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  removeVisitFromQueue(position,visitId): void{
    this.peffrontdeskservice.updateVisit(visitId).subscribe(
      (res) => {
        if(res['response'] == "successful"){
          this.visits.splice(position,1);
        }
      }
    )
  }

}
