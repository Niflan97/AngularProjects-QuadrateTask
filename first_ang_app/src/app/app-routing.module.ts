import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';

const routes: Routes = [
  {
    path : '',
    component: StudentsListComponent
  },
  {
    path : 'students',
    component:StudentsListComponent
  },

  {
    path : 'students/add',
    component:AddStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
