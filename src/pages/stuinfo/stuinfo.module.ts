import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuinfoPage } from './stuinfo';

@NgModule({
  declarations: [
    StuinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StuinfoPage),
  ],
})
export class StuinfoPageModule {}
