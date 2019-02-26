import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'admin'
})
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  formup:FormGroup;
  sturege:AbstractControl;
  stuname:AbstractControl;
  adreg: any;
  adname:any;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public http: Http, public fb:FormBuilder) {
    this.formup = fb.group({
      sturege: ['', [Validators.required, Validators.minLength(15), Validators.pattern('^[A-Z0-9]+$')]],
      stuname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
    });
    this.sturege = this.formup.controls['sturege'];
    this.stuname = this.formup.controls['stuname'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  showin() {
    let body = {
      reg1: this.adreg,
      name1:this.adname
    }
    this.http.post('http://localhost:8050/adminin', body).subscribe(resp => {
      console.log(resp.json());
        if(resp.json().status == 200)
        this.navCtrl.push('stuinfo',{data:this.adreg});
      })
  }
  home(){
    this.navCtrl.setRoot(HomePage);
    const toast = this.toastCtrl.create({
      message: 'You were Logged Out Successfully',
      duration: 2500
    });
    toast.present();
  }
}
