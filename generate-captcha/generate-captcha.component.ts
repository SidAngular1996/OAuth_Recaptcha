import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-generate-captcha',
  templateUrl: './generate-captcha.component.html',
  styleUrls: ['./generate-captcha.component.css']
})
export class GenerateCaptchaComponent implements OnInit {
  @ViewChild('captcha') captcha_dom: ElementRef;
  @ViewChild('inputText') input_dom: ElementRef;
   captcha;
   input;

  constructor() { }

  ngOnInit() {
  this.generateCaptcha()
  }
 
     
  generateCaptcha() {
      var a = Math.floor((Math.random() * 10));
      var b = Math.floor((Math.random() * 10));
      var c = Math.floor((Math.random() * 10));
      var d = Math.floor((Math.random() * 10));
   
    this.captcha=a.toString()+b.toString()+c.toString()+d.toString();
    
      // document.getElementById("captcha_dom").value = this.captcha;
  }
   
  check(){
    // this.input=document.getElementById("input_dom").value;
   
    if(this.input==this.captcha){
      alert("Equal");
    }
    else{
      alert("Not Equal");
    }
  }

}