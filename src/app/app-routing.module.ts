import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './frontdesk/forgot-password/forgot-password.component';
import { LoginComponent } from './frontdesk/login/login.component';
import { CalledVisitorComponent } from './frontdesk/main-page/called-visitor/called-visitor.component';
import { MainPageComponent } from './frontdesk/main-page/main-page.component';
import { NewVisitorComponent } from './frontdesk/main-page/new-visitor/new-visitor.component';
import { PendingChequeComponent } from './frontdesk/main-page/pending-cheque/pending-cheque.component';
import { VisitingQueueComponent } from './frontdesk/main-page/visiting-queue/visiting-queue.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword',component: ForgotPasswordComponent},
  {path: 'mainPage', component: MainPageComponent,
    children: [
      {path: 'newVisitor', component: NewVisitorComponent},
      {path: 'calledVisitor', component: CalledVisitorComponent},
      {path: 'visitingQueue', component: VisitingQueueComponent},
      {path: 'pendingCheque', component: PendingChequeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
