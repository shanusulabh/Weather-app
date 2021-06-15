import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeUserPage } from './welcome-user';

@NgModule({
  declarations: [
    WelcomeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeUserPage),
  ],
})
export class WelcomeUserPageModule {}
