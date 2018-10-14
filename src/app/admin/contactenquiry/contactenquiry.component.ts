import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-contactenquiry',
  templateUrl: './contactenquiry.component.html',
  styleUrls: ['./contactenquiry.component.css']
})
export class ContactenquiryComponent implements OnInit {
  enquiries:any[]=[]
  constructor(public rentalservice:RentalService) { }

  ngOnInit() {
  
    this.rentalservice.getContactsForms().subscribe(data=>this.enquiries=data)

  }
  deleteEnquiry(id:string){
    this.rentalservice.delContactEnquiry(id)
  }

}
