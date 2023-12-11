import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:8080'; // Update with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any[]> {
    return this.http.get<any[]>(${this.apiUrl}/job/jobs);
  }

  // Add other methods as needed (createJob, getJobById, deleteJob, updateJob)
}