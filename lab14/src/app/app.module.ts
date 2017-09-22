import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
