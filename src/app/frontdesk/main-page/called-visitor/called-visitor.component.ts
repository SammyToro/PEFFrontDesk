import { Component, OnInit } from '@angular/core';
import { Cheque } from 'src/app/model/cheque';
import { Participant } from 'src/app/model/participant';
import { Person } from 'src/app/model/person';
import { PeffrontdeskserviceService } from 'src/app/service/peffrontdeskservice.service';
import * as bootstrap from 'bootstrap';
declare var $: any;

@Component({
  selector: 'app-called-visitor',
  templateUrl: './called-visitor.component.html',
  styleUrls: ['./called-visitor.component.css']
})
export class CalledVisitorComponent implements OnInit {

  public person: Person;
  public participant: Participant;
  public cheque: Cheque;
  public hideSubmitButton: boolean;
  public hideLoading: boolean;

  constructor(private peffrontdeskservice: PeffrontdeskserviceService) { }

  ngOnInit(): void {
    this.participant = new Participant();
    this.participant.gender = "m";
    this.cheque = new Cheque();
    this.hideSubmitButton = false;
    this.hideLoading = true;
  }

  submitCalledVisitorForm(calledVisitorForm){
    this.hideSubmitButton = true;
    this.hideLoading = false;
    this.peffrontdeskservice.createCalledParticipant(this.participant,this.cheque)
      .subscribe((res) => {
        if(res['data'] == 'successful'){
          let toastEl = document.getElementById('toastId');
          let toast = new bootstrap.Toast(toastEl);
          toast.show();
          calledVisitorForm.reset();
          this.ngOnInit();
        }
      });
  }
}
