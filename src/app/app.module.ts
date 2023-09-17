import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LastpageComponent } from './lastpage/lastpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FirstpageComponent,
    LastpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
