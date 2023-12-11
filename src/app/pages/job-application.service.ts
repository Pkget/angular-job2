import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'http://localhost:8080'; // Update with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getAllJobApplications(): Observable<any[]> {
    return this.http.get<any[]>(${this.apiUrl}/job-application/applications);
  }

  // Add other methods as needed (createJobApplication, getJobApplicationById, deleteJobApplication)
}