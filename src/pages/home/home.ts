import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  forma:FormGroup;
  stureg:AbstractControl;
  Passkey:AbstractControl;

  pass: any;
  reg: any;
  regad:any;
  passad:any;
  constructor(public navCtrl: NavController, public http: Http, public fb:FormBuilder) {
    this.forma = fb.group({
      stureg: ['', [Validators.required, Validators.minLength(15), Validators.pattern('^[A-Z0-9]+$')]],
      Passkey:['',[Validators.required]]
    })
  }
  Login() {
    let body = {
      password: this.pass,
      regno: this.reg
    }
    this.http.post('http://localhost:8050/pass', body).subscribe(response => {
      console.log(response.json());
      if (response.json().status == 400) {
        alert("Invalid Reg. no. or Password");
      }
      else {
        this.navCtrl.setRoot('hello', { data: this.reg });
      }
    })
  }
  vanish(){
    document.getElementById('ya').innerHTML=null;
  }
  Loginad(){
    if(this.regad == 12345 && this.passad=="newbee")
    this.navCtrl.setRoot('admin');
    else
    alert("Incorrect Password/Username!");
  }
  sign(){
    this.navCtrl.push('signup');
  }
}
