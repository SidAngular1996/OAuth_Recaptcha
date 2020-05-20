import { Component, OnInit,ViewChild,ElementRef,Inject, AfterViewInit } from '@angular/core';
import {DOCUMENT} from '@angular/common'

@Component({
  selector: 'app-captcha-two',
  templateUrl: './captcha-two.component.html',
  styleUrls: ['./captcha-two.component.css']
})
export class CaptchaTwoComponent implements OnInit,AfterViewInit {
  @ViewChild('mainCaptcha') maincaptcha: ElementRef;
  @ViewChild('txtInput') txtinput: ElementRef;

  captcha;
  input

  ngAfterViewInit(){
    console.log(this.maincaptcha.nativeElement.innerHTML)
  }

  constructor(@Inject(DOCUMENT) document) {
    console.log(document.getElementById('mainCaptcha'))
   }

  ngOnInit() {
    this.Captcha()
  }

   Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
     }
   var code = ' ' +' ' +' ' +' ' +' ' +' ' +' ' +' ' +' ' +' ' +' ' +a.toString() + ' ' + b.toString()  + ' ' + ' ' + c.toString()  + ' ' + d.toString()  + ' ' + e.toString()  + ' '+ f.toString()  + ' ' + g.toString() ;
   this.captcha = code
 }

 ValidCaptcha(){
  
  var string1 = this.removeSpaces(this.captcha);
  var string2 = this.removeSpaces(this.input);
  if (string1 == string2){
    alert("Equal");
  }
  else{        
    alert("Not Equal");
  }
}
 removeSpaces(string){
return string.split(' ').join('');
}


}
