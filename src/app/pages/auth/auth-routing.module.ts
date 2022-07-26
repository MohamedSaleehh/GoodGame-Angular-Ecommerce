import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoggedinGuard } from 'src/app/guards/loggedin.guard';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', canActivate:[LoggedinGuard],  component:LoginComponent},
  {path: 'register', canActivate:[LoggedinGuard], component:RegisterComponent},
  {path:'account',canActivate:[AuthGuard], component:AccountComponent},
  {path:'orders/:order_id', component:OrderComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
