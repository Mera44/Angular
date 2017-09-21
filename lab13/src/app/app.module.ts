import { BrowserModule } from '@angular/platform-browser';
import { myRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './student.component';
import { DbService } from './db.service';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
