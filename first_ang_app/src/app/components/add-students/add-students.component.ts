import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/Models/Student.model';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  addStudentsRequest: students = {
    id : '',
    fName : '',
    email: '',
    phone: 0
  };
  
  constructor(private studentService : StudentsService) {}

  ngOnInit(): void {}


    addStudents()
    {
      this.studentService.addStudents(this.addStudentsRequest)
      .subscribe({
        next: (student) =>
        {
          console.log(student);
        }
      }); 

    }


}
