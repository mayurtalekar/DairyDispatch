import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-payment-mathod',
  templateUrl: './payment-mathod.component.html',
  styleUrls: ['./payment-mathod.component.css']
})
export class PaymentMathodComponent {

  constructor(public service:MilkService){}
  
  cash=''
  seleted = false
 


}
