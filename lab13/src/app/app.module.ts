import { BrowserModule } from '@angular/platform-browser';
import { myRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './student.component';
import { DbService } from './db.service';
import { ProfileComponent } from './profile.component';
import { MyCanActivateGuard } from './guards/mycanactivate.guard';
import { MyCanDeactivateGuard } from './guards/mycandeactivate.guard';

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
  providers: [DbService, MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
