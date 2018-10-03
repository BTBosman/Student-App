import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {StudentsPage} from '../students/students';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Students(){
    this.navCtrl.push(LoginPage);
  }

}
