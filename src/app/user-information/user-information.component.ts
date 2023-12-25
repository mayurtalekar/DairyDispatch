import { Component } from '@angular/core';
import { MilkService } from '../milk.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  constructor(public service : MilkService,public fb : FormBuilder){}
  submitted: any = false;

  
  isOpen: boolean = false;

toggleDropdown() {
  this.isOpen = !this.isOpen;
}


  citys: any[] = [
    { name: 'Vashi', value: 'Vashi' },
    { name: 'Sanpada', value: 'Sanpada' },
    { name: 'koperkhairane', value: 'koperkhairane' },
    { name: 'Ghansoli', value: 'Ghansoli' },
    { name: 'Airoli', value: 'Airoli' },
  ]

  myForm = this.fb.group({
    UserName: ['', [Validators.required]],
    UserAddress: ['', [Validators.required]],
    UserCity: ['', [Validators.required]],
  });

  submitForm() {
  
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }

    if(this.myForm.valid == false){
      this.submitted = false
    }else{
      this.submitted = true;
      this.service.openPayment()
    
      console.log(this.myForm.value);
    }
    // console.log(this.myForm.value);
    

    
  }

}
