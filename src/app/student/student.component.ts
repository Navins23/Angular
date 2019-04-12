import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  text;

  constructor(private std:StudentService) { }

  ngOnInit() {
    this.text=this.std.display()
  }
  
}
