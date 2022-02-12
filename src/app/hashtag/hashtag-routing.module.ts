import { AddHashtagComponent } from './add-hashtag/add-hashtag.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HashtagComponent } from './hashtag/hashtag.component';

const routes: Routes = [
  { path: '', component: HashtagComponent},
  { path: 'add', component: AddHashtagComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashtagRoutingModule { }
