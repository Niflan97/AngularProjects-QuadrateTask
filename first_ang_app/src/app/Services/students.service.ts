import { HttpClient } from '@angular/common/http';
import { Environment } from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.staging';
import { students } from '../Models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

   
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetAllStudents() : Observable<students[]>
  {
    return this.http.get<students[]>(this.apiUrl + '/api/Students');
  }

  addStudents(addStudentsRequest : students) : Observable<students>
  {
    addStudentsRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<students>(this.apiUrl + '/api/Students', addStudentsRequest);
  }

}
