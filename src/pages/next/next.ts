import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'hello'
})
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {
  items:any;
  id:any;
  today = Date.now();
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.http.get("http://localhost:8050/lib").subscribe(data=>{
      this.items = data;
      console.log(data);
    })
    this.id=navParams.get('data');
    console.log(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
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
