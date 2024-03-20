import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './Services/student.service';
import { Student } from './Models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudAPI';

  constructor(private http:HttpClient, private studentService:StudentService)
  {
     
  }

  
  stdList:Student []=[];
  stdObj:Student = new Student();
  editObj:Student = new Student();

  getAllStdV:number=0;
  createV:number=0;
  editV:number=0;

  createM(){
    this.createV=1;
    this.getAllStdV=0;
    this.editV=0;
  }

  editButton(student : Student){
    this.editObj=student;
    this.editV=1;
    this.getAllStdV=0;
    this.createV=0;

  }

  backMenuMethod(){
    this.getAllstudent();
  }

  getAllstudent()
  {
    this.studentService.getAll().subscribe((data:Student[]) => {
      this.stdList=data;
      this.getAllStdV=1;
      this.editV=0;
      this.createV=0;
    });
  }

  getStudentById(id:number)
  {
    this.studentService.getById(id).subscribe((data:any) => {
      this.stdObj=data;
    });
  }

  addStudent(student:Student)
  {
    this.studentService.addStudent(student).subscribe((data:any) => {
      this.getAllstudent();
      this.stdObj=new Student();
      this.createV=0;
      this.editV=0;
    });
  }

  updateStudent(id:number,student:Student)
  {
    this.studentService.updateStudent(id,student).subscribe((data:any) => {
      this.getAllstudent();
      this.editObj=new Student();
      this.editV=0;
      this.createV=0;
    });
  }

  deleteStudent(id:number)
  {
    this.studentService.deleteStudent(id).subscribe((data:any) => {
      this.getAllstudent();
    });
  }

}
