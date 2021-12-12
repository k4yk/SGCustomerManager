import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "customers",
    pathMatch: "full"
  },
  {
    path: "",
    component: AppComponent
  },
  {
    path: "customers",
    canActivate: [AuthGuard],
    component: CustomersComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
