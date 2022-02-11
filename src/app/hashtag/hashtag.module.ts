import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


import { HashtagRoutingModule } from './hashtag-routing.module';
import { HashtagComponent } from './hashtag/hashtag.component';


@NgModule({
  declarations: [
    HashtagComponent
  ],
  imports: [
    CommonModule,
    HashtagRoutingModule,
    AppMaterialModule
  ]
})
export class HashtagModule { }
