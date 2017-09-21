import { RouterModule, Routes } from "@angular/router";
import { MyCanActivateGuard } from './guards/mycanactivate.guard';
import { MyCanDeactivateGuard } from './guards/mycandeactivate.guard';

import { HomeComponent } from './home.component';
import { StudentsComponent } from './student.component';
import { ProfileComponent } from './profile.component';


const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
     { path: 'profile/:id', component: ProfileComponent, canActivate: [MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard]},
     // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
     // The default matching strategy of Angular router is
     // to match the redirect route when the URL begins with the redirect route's prefix path.
     // if 'prefix' all params/routes/xx will be redirected to homepage
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
