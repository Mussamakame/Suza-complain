import { Component, OnInit } from '@angular/core';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  constructor(private staffService:StaffService) {}

  staff: any[] = [];

  getStaff() {
    this.staffService.getStaff().subscribe(response => {
      this.staff = response;
      console.log(response)
    });
  }

  ngOnInit(): void {
    this.getStaff();
  }

}



