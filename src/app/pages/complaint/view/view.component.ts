import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  complaints:any[]=[] 
  constructor(private complantService:ComplaintService){}
  ngOnInit(): void {
    this.getComplant();
   
  }
  getComplant(){
    this.complantService.getComplant().subscribe(responce => this.complaints=responce)
  }
 

}
