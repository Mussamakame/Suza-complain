import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../service/complaint.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  constructor(private studentService: StudentService) {}

  student: any[] = [];

  getStudent() {
    this.studentService.getStudent().subscribe(response => {
      this.student = response;
      console.log(response)
    });
  }

  ngOnInit(): void {
    // this.getStudent();
  }

}


