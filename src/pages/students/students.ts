import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignIn } from '../../app/signInArray';
import signupArr from '../../app/signInGlobal';

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  firstName:string;
  lastName:string;
  stdNumber:string;

  arr = signupArr;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  SaveData(firstName,lastName,stdNumber){
    let obj = new SignIn(firstName,lastName,stdNumber);
    signupArr.push(obj);
  }

  update(i,newFirstName,newLastName,newStdNumber){
    let oldFirstName = signupArr[i].newFirstName;
    let oldLastName = signupArr[i].newLastName;
    let oldStdNumber = signupArr[i].newStdNumber;

    if (newFirstName != null && newLastName != null && newStdNumber != null){
      let obj = new SignIn(newFirstName,newLastName,newStdNumber);
      signupArr[i] = obj;
    }
     else if (newFirstName != null){
      let obj = new SignIn(oldFirstName,newLastName,newStdNumber);
      signupArr[i] = obj;
    }
    else if (newLastName != null){
      let obj = new SignIn(newFirstName,oldLastName,newStdNumber);
      signupArr[i] = obj;
    }
    else if (newStdNumber != null){
      let obj = new SignIn(newFirstName,newLastName,oldStdNumber);
      signupArr[i] = obj;
    }
  }

  remove(i){
    signupArr.splice(i,1)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

}
