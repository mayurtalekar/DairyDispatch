import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 constructor(public ms:MilkService){
 console.log(this.ms.shree);
 
 }
}
