import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'signup'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  forma: FormGroup;
  stusign: AbstractControl;
  stupass: AbstractControl;
  regs: any;
  passs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public fb: FormBuilder) {
    this.forma = fb.group({
      stusign: ['', [Validators.required, Validators.minLength(15), Validators.pattern('^[A-Z0-9]+$')]],
      stupass: ['', [Validators.required]]
    });
    this.stusign = this.forma.controls['stusign'];
    this.stupass = this.forma.controls['stupass'];
  }

  Signup() {
    let body = {
      passwords: this.passs,
      regnos: this.regs
    }
    this.http.post('http://localhost:8050/signup', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("You have already been registered!")
      else
        if (resp.json().status == 200) {
          alert("Successfully Signed Up");
          this.navCtrl.setRoot(HomePage);
        }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
