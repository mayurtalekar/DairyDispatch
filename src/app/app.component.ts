import { Component } from '@angular/core';
import { MilkService } from './milk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'milkman';
  constructor(public ms:MilkService){
 console.log(this.ms.shree);
 
  }
}
