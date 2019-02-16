import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './modules/material.module';
import { ReviewFullComponent } from './review-full/review-full.component';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewFullComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
