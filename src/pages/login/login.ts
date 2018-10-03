import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {SignIn} from '../../app/signInArray';
import signUpArr from '../../app/signInGlobal';
import { StudentsPage } from '../students/students';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // signUpArr=[];
  userName="Buhle";
  password="1234";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  sign(userName,password){
    if(userName == "Buhle" && password == "1234"){
      const alert = this.alertCtrl.create({
        title: 'Welcome!',
        subTitle: 'Welcome to the student application.',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(StudentsPage);
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Bad Credentials!',
        subTitle: 'Please enter the correct Username and passWord!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
