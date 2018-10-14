import { Component, OnInit } from '@angular/core';
import {RentalService} from '../../services/rental.service';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-rentenquiries',
  templateUrl: './rentenquiries.component.html',
  styleUrls: ['./rentenquiries.component.css']
})
export class RentenquiriesComponent implements OnInit {

  public enquiries:Rental[]=[]
  constructor(public rentalservice:RentalService) { }

  ngOnInit() {
    this.getenquiries()

  }

  getenquiries(){
    this.rentalservice.getRentalrwndenq().subscribe(data=>this.enquiries=data)
  }
  delEnquiry(id:string){
    this.rentalservice.delRentalrwndenq(id)
    
  }

}

