import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cheque } from '../model/cheque';
import { Employee } from '../model/employee';
import { Participant } from '../model/participant';
import { Visitor } from '../model/visitor';
import { Visits } from '../model/visits';

@Injectable({
  providedIn: 'root'
})
export class PeffrontdeskserviceService {

  baseUrl = 'http://localhost/peffrontdesk/api';
  public loggedInEmployee: Employee;

  constructor(private http: HttpClient) { }

  authenticate(employee: Employee): Observable<any>{
    return this.http.put(`${this.baseUrl}/authenticate`,{data: employee })
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllEmployees`)
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  createCalledParticipant(participant: Participant,cheque: Cheque): Observable<any> {
    let data = {"participant": participant,"cheque" : cheque};
    return this.http.post(`${this.baseUrl}/createCalledParticipant`,data)
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  getParticipantChequeDetails(chequeNo: number): Observable<any>{
    return this.http.post(`${this.baseUrl}/getParticipantChequeDetails`,{data: chequeNo})
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  createVisitLog(visitor: Visitor,visit: Visits): Observable<any>{
    let data = {"visitor": visitor, "visit": visit};
    return this.http.post(`${this.baseUrl}/createVisitLog`,data)
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));

  }

  searchEmployeeName(name: string): Observable<any>{
    return this.http.post(`${this.baseUrl}/searchEmployeeName`,{data: name})
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  getActiveVisits(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getActiveVisits`)
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  updateVisit(visitId: number): Observable<any>{
    return this.http.post(`${this.baseUrl}/updateVisit`,{data: visitId})
      .pipe(map((res) => {
        return res;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! Something went wrong.');
  }
}
