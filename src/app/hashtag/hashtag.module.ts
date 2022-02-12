import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AddHashtagComponent } from './add-hashtag/add-hashtag.component';
import { HashtagRoutingModule } from './hashtag-routing.module';
import { HashtagComponent } from './hashtag/hashtag.component';



@NgModule({
  declarations: [
    HashtagComponent,
    AddHashtagComponent
  ],
  imports: [
    CommonModule,
    HashtagRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HashtagModule { }
