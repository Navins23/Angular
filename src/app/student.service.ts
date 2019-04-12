import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stud=[
    {name:"Navin",email:"navin@gmail.com",roll:"5",address:"Balaju"},
    {name:"Rojit",email:"rojit@gmail.com",roll:"6",address:"Ktm"},
    {name:"Ritu",email:"ritu@gmail.com",roll:"7",address:"Boudha"},
    ]
  constructor() { }
  display(){
   return this.stud;
   
  }

  addStudent(x){
    this.stud.push(x);
  }
}
