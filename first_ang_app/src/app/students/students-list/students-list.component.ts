import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  
  Students: students[] = []; 

  constructor (private studentService: StudentsService) {}

  ngOnInit(): void {

    this.studentService.GetAllStudents()
    .subscribe({
      next: (students) => {
        this.Students = students;
      },
      error: (response) => {
        console.log(response);
      }
    });
    
  }

}
