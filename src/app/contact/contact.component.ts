import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public service : MilkService){}

}
