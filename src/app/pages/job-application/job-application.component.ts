import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../services/job-application.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  jobApplications: any[];

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.jobApplicationService.getAllJobApplications().subscribe(data => {
      this.jobApplications = data;
    });
  }
}