import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './frontdesk/login/login.component';
import { PeffrontdeskserviceService } from './service/peffrontdeskservice.service';
import { ForgotPasswordComponent } from './frontdesk/forgot-password/forgot-password.component';
import { MainPageComponent } from './frontdesk/main-page/main-page.component';
import { NewVisitorComponent } from './frontdesk/main-page/new-visitor/new-visitor.component';
import { CalledVisitorComponent } from './frontdesk/main-page/called-visitor/called-visitor.component';
import { VisitingQueueComponent } from './frontdesk/main-page/visiting-queue/visiting-queue.component';
import { PendingChequeComponent } from './frontdesk/main-page/pending-cheque/pending-cheque.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MainPageComponent,
    NewVisitorComponent,
    CalledVisitorComponent,
    VisitingQueueComponent,
    PendingChequeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeffrontdeskserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
