import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  
  constructor(private complaintService:ComplaintService) {}

  complaints: any[] = [];

  getComplaints() {
    this.complaintService.getComplant().subscribe(response => {
      this.complaints = response;
      console.log(response)
    });
  }

  ngOnInit(): void {
    this.getComplaints();
  }

}
