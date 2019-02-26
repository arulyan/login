import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
/**
 * Generated class for the StuinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'stuinfo'
})
@Component({
  selector: 'page-stuinfo',
  templateUrl: 'stuinfo.html',
})
export class StuinfoPage {

  items:any;
  id:any;
  today = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,public htttp:Http) {
    this.http.get("http://localhost:8050/lib").subscribe(data=>{
      this.items = data;
      console.log(data);
    })
    this.id=navParams.get('data');
    console.log(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuinfoPage');
  }
  goto(){
    this.navCtrl.push('addboo',{data:this.id});
  }
  delete1(){
    let body={
      ide:this.id
    }
    this.htttp.post('http://localhost:8050/delete1',body).subscribe(resp=>{
      console.log(resp.json());
      if(resp.json().status == 200){
        alert("Book succesfully returned!");
      }
    })
  }

  delete2(){
    let body={
      ide:this.id
    }
    this.htttp.post('http://localhost:8050/delete2',body).subscribe(resp=>{
      console.log(resp.json());
      if(resp.json().status == 200){
        alert("Book succesfully returned!");
      }
    })
  }

  delete3(){
    let body={
      ide:this.id
    }
    this.htttp.post('http://localhost:8050/delete3',body).subscribe(resp=>{
      console.log(resp.json());
      if(resp.json().status == 200){
        alert("Book succesfully returned!");
      }
    })
  }
}
