import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  recent_complaints: any[] = [];
  isSolved = false;

  

  constructor(private complaintsService: ComplaintService) { }

  getRecentComplaints() {
    this.complaintsService.getComplant().subscribe(resp => this.recent_complaints = resp);
  }

  ngOnInit(): void {
    this.getRecentComplaints();
  }
}
