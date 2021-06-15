import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome-user',
  templateUrl: 'welcome-user.html',
})
export class WelcomeUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeUserPage');
  }

  goToDisplayWeatherPage() {
    this.navCtrl.push('DisplayWeatherPage'); // redirecting to another page
  }

}
