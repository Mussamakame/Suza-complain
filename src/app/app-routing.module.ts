import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { MainDashComponent } from './pages/main-dash/main-dash.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ViewComponent } from './pages/complaint/view/view.component';
import { AddComplaintComponent } from './pages/complaint/add-complaint/add-complaint.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedbackComponent } from './pages/complaint/feedback/feedback.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'main', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: MainDashComponent
      },
      {
        path: 'complaint',
        component: ComplaintComponent,
        children: [
          {
            path: '',
            redirectTo: 'view-complaint',
            pathMatch: 'full'
          },
          {
            path: 'view-complaint',
            component: ViewComponent
          },
          {
            path: 'add-complaint',
            component: AddComplaintComponent
          },
          {
            path: 'feedback',
            component: FeedbackComponent
          }
        ]
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ] 
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
