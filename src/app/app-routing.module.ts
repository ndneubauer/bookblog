import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewFullComponent } from './review-full/review-full.component';
import { ReviewListComponent } from './review-list/review-list.component';

const routes: Routes = [
  { path: 'review/:id', component: ReviewFullComponent },
  { path: '', component: ReviewListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
