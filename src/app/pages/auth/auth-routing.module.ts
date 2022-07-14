import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoggedinGuard } from 'src/app/guards/loggedin.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', canActivate:[LoggedinGuard],  component:LoginComponent},
  {path: 'register', canActivate:[LoggedinGuard], component:RegisterComponent},
  {path:'profile',canActivate:[AuthGuard], component:ProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
