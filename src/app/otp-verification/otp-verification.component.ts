import { Component } from '@angular/core';
import { MilkService } from '../milk.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  constructor(public service : MilkService,public fb:FormBuilder){}

  
  invalid = false
  display: any;
  timer : any = 30;

  

  timeout(){
    setTimeout(() => {
    if(this.timer==0){
      console.log('finished');
      
    }
    else if (this.timer >= 0) {
      this.timer--
      this.timeout()
    }
  }, 1000);
  }
  




    otpForm = this.fb.group({
    number: ['', [Validators.required ,]],
    number2: ['', [Validators.required ,]],
    number3: ['', [Validators.required ,]],
    number4: ['', [Validators.required ,]],
  }); 

  
  otp: string[] = ['', '', '', ''];
  onInput(index: number) {
    const nextIndex = index < this.otp.length ? index + 1 : index;
    if (nextIndex < this.otp.length) {
      const nextInput = document.getElementById(`otp${nextIndex}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  move(e: any, p: any, c: any, n: any) {
    let length = c.value.length;
    if (length == 1) {
      if (n != '') {
        n.focus()
      }
    }
    if(e.key === 'Backspace'){
      if(p != ""){
        p.focus();
      }
    }
  }

  nextpopup() {
    if (
      this.otpForm.get('number')?.invalid  ||
      this.otpForm.get('number2')?.invalid ||
      this.otpForm.get('number3')?.invalid ||
      this.otpForm.get('number4')?.invalid 
    ){
      console.log("Invalid values detected");
      this.invalid = true;
    } else {
      console.log("No error, all values are present");
      this.invalid = false;
      this.service.openAddress()
    }

  }

}
