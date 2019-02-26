import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the AddbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'addboo'
})
@Component({
  selector: 'page-addbook',
  templateUrl: 'addbook.html',
})
export class AddbookPage {
  b1: any;
  b2:any;
  b3:any;
  id: any;
  issue1: any;
  issue2:any;
  issue3:any;
  due1: any;
  due2:any;
  due3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.id = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbookPage');
  }

  vanish() {
    document.getElementById('ya').innerHTML = null;
  }

  Add1() {
    let body = {
      ide: this.id,
      boo1: this.b1,
      issu1: this.issue1,
      du1: this.due1
    }
    this.http.post('http://localhost:8050/stubook1', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("book already exists")
      else
        if (resp.json().status == 200) {
          alert("Book Added");
        }
    })
  }
  caution1() {
    let body = {
      ide: this.id
    }
    this.http.post('http://localhost:8050/checker1', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("Book slot is filled, Please return Book to open the slot")
    })

  }

//2nd Book Slot

  Add2() {
    let body = {
      ide: this.id,
      boo2: this.b2,
      issu2: this.issue2,
      du2: this.due2
    }
    this.http.post('http://localhost:8050/stubook2', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("book already exists")
      else
        if (resp.json().status == 200) {
          alert("Book Added");
        }
    })
  }
  caution2() {
    let body = {
      ide: this.id
    }
    this.http.post('http://localhost:8050/checker2', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("Book slot is filled, Please return Book to open the slot")
    })

  }
  Add3() {
    let body = {
      ide: this.id,
      boo3: this.b3,
      issu3: this.issue3,
      du3: this.due3
    }
    this.http.post('http://localhost:8050/stubook3', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("book already exists")
      else
        if (resp.json().status == 200) {
          alert("Book Added");
        }
    })
  }
  caution3() {
    let body = {
      ide: this.id
    }
    this.http.post('http://localhost:8050/checker3', body).subscribe(resp => {
      console.log(resp.json());
      if (resp.json().status == 300)
        alert("Book slot is filled, Please return Book to open the slot")
    })

  }
}
