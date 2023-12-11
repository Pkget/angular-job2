import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { JobComponent } from './job/job.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'admins', component: AdminComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'applications', component: JobApplicationComponent },
  { path: 'users', component: UserComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }