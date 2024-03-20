import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  baseUrl:string='https://localhost:44309/api/Student';

  public getAll():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.baseUrl);
  }

  public getById(id:number):Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+'/'+id);
  }

  public addStudent(student:Student):Observable<any>
  {
    return this.http.post(this.baseUrl, student);
  }

  public updateStudent(id:number,student:Student):Observable<any>
  {
    return this.http.put(this.baseUrl+'/'+id, student);
  }

  public deleteStudent(id:number):Observable<any>
  {
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
