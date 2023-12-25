import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(public service : MilkService){

  }

}
