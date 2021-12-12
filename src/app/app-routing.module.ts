import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
