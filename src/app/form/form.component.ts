import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators}from '@angular/forms';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form:FormGroup;
  error:boolean;
 
  constructor(private fb:FormBuilder,private serv:StudentService) { }
  ngOnInit() {
    this.form=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('^[a-zA-Z\  \']+')]],
      email:['',[Validators.required,Validators.minLength(12),Validators.maxLength(15),Validators.email]],
      roll: ['',[Validators.required,Validators.min(1),Validators.max(30)]], 
      address:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
      
    })

  }
 
onSubmit(){
   if(this.form.valid){
      console.log("valid")
     }
    else{
      this.error=true;
   }
this.serv.addStudent(this.form.value)
 
}


  }
