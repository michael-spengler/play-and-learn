import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ImpressumModule } from 'german-impressum';
import { NavbarModule } from 'ng-responsive-navbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NavbarModule,
    ImpressumModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
