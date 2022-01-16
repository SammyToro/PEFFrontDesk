import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { Cheque } from 'src/app/model/cheque';
import { Employee } from 'src/app/model/employee';
import { Participant } from 'src/app/model/participant';
import { Person } from 'src/app/model/person';
import { Visitor } from 'src/app/model/visitor';
import { Visits } from 'src/app/model/visits';
import { PeffrontdeskserviceService } from 'src/app/service/peffrontdeskservice.service';
import * as bootstrap from 'bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.css']
})

export class NewVisitorComponent implements OnInit {

  public visitor: Visitor;
  public visit: Visits;
  public cheque: Cheque;
  public receivedCheque: Cheque;
  public participant: Participant;
  public employees: Employee[];
  public purposes  = ['official','cheque','enquiry','personal'];
  public hideIdInput: boolean;
  public hideChequeNoNotFoundError: boolean;
  public hideStoredNames: boolean;
  public hideLoading: boolean;
  public hideDone: boolean;
  public hideModalDone: boolean;
  public hideModalLoading: boolean;
  public searchResults: Person[];
  private searchTerm: Subject<String> = new Subject();
  error  = '';

  constructor(private peffrontdeskservice: PeffrontdeskserviceService) { }

  ngOnInit(): void {
    this.getAllEmployees();
    this.visit = new Visits();
    this.visit.purpose = "official";
    this.cheque = new Cheque();
    this.receivedCheque = new Cheque();
    this.participant = new Participant();
    this.visitor = new Visitor();
    this.hideIdInput = null;
    this.hideChequeNoNotFoundError = true;
    this.hideStoredNames = true;
    this.hideLoading = true;
    this.hideDone = false;
  }

  submitNewVisitorForm(newVisitorForm){
    this.hideDone = true;
    this.hideLoading = false;
    this.peffrontdeskservice.createVisitLog(this.visitor,this.visit)
      .subscribe((res) => {
        console.log(res);
        if(res['response'] == "successful"){
          $('#toastId').toast('show');
          newVisitorForm.reset();
          this.ngOnInit();
        }
      })
  }

  submitReceivingChequeForm(receivingChequeForm){
    this.peffrontdeskservice.getParticipantChequeDetails(this.cheque.chequeNo)
      .subscribe((res) => {
        if(res['response'] == "successful"){
          this.receivedCheque = res['cheque'];
          this.participant = res['participant'];
          $('.modal').modal('hide');
          $('#chequeConfirmationStaticBackdrop').modal('toggle');
        }else{
          this.hideChequeNoNotFoundError = false;
        }
      })
  }

  resetReceivingChequeForm(receivingChequeForm){
    receivingChequeForm.reset();
  }

  isPersonalCheque(){
    this.hideIdInput = true;
  }

  isNotPersonalCheque(){
    this.hideIdInput = false;

  }

  getAllEmployees(): void{
    this.peffrontdeskservice.getAllEmployees().subscribe(
      (res) => {
        this.employees = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  searchName(): void{
    if(this.visitor.name.length >= 3){
        this.peffrontdeskservice.searchEmployeeName(this.visitor.name)
        .pipe(debounceTime(1000),distinctUntilChanged())
          .subscribe((res) => {
            if(res['response'] == "successful"){
              this.searchResults = res['persons'];
              this.hideStoredNames = false;
            }
            else{
              this.hideStoredNames = true;
            }
          })
    }else{
      this.hideStoredNames = true;
    }
  }

  onClickPersonName(person: Person){
    this.visitor = person as Visitor;
    this.hideStoredNames = true;
  }

  closeChequeDetailsModal(receivingChequeForm){
    $(document.body).removeClass('modal-open');
    $('.modal-backdrop').hide();
    this.resetReceivingChequeForm(receivingChequeForm);
  }

  doneChequeDetailsModal(newVisitorForm,receivingChequeForm){
    $('#chequeConfirmationStaticBackdrop').modal('hide');
    $(document.body).removeClass('modal-open');
    $('.modal-backdrop').hide();
    this.resetReceivingChequeForm(receivingChequeForm);
    this.submitNewVisitorForm(newVisitorForm);
  }

}
