import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  contacts:{id?:string,name?:string,contact?:string,message?:string}[]
  constructor(public rentalservice:RentalService) { }

  ngOnInit() {
    this.rentalservice.getContactsForms().subscribe(data=>this.contacts=data)
  }

}
