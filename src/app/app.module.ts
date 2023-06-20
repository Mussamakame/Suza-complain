import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NervebarComponent } from './pages/nervebar/nervebar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { LoginComponent } from './forms/login/login.component';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainDashComponent } from './pages/main-dash/main-dash.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ViewComponent } from './pages/complaint/view/view.component';
import { AddComplaintComponent } from './pages/complaint/add-complaint/add-complaint.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedbackComponent } from './pages/complaint/feedback/feedback.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    NervebarComponent,
    UserdashbordComponent,
    LoginComponent,
    DashboardComponent,
    MainDashComponent,
    ComplaintComponent,
    ViewComponent,
    AddComplaintComponent,
    ProfileComponent,
    FeedbackComponent,
    RegistrationComponent,
    StudentComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
