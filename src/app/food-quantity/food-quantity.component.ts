import { Component } from '@angular/core';
import { MilkService } from '../milk.service';

@Component({
  selector: 'app-food-quantity',
  templateUrl: './food-quantity.component.html',
  styleUrls: ['./food-quantity.component.css']
})
export class FoodQuantityComponent {
  constructor(public service : MilkService){}


  
  bhakri = 2;
  pithla = 1;
  bhakriPrice = 50;
  pithlaPrice = 50;
  thechaPrice = 0;
  onionPrice = 0;
  orderdata:any;

  seleted: any = true;

  bhakriIncrement() {
    if (this.bhakri > 0) {
      this.bhakri++;
      this.bhakriPrice = this.bhakriPrice + 25


      // console.log("bhakri quantity", this.data.foodquantity);
    }


    // console.log(this.bhakriPrice + this.pithla + this.pithlaPrice + this.onionPrice);
  }
  bhakriDecrement() {
    if (this.bhakri > 1) {
      this.bhakri--;
      this.bhakriPrice = this.bhakriPrice - 25
    }
  }

  pithlaIncrement() {
    if (this.pithla > 0) {
      this.pithla++;
      this.pithlaPrice = this.pithlaPrice + 50
    }
  }
  pithlaDecrement() {
    if (this.pithla > 1) {
      this.pithla--;
      this.pithlaPrice = this.pithlaPrice - 50
      // console.log(this.pithla);
    }
  }

  pushValueToService() {
    let totalValue = this.bhakriPrice + this.pithlaPrice + this.thechaPrice + this.onionPrice
    
     this.orderdata = {
      bhakri: this.bhakri,
      pithla: this.pithla,
      test: '',
      totalPrice: totalValue,
    }

    if (this.seleted == true) {
      this.orderdata.test = "Medium"
    } else {
      this.orderdata.test = "Spicy"
    }

  }


}
