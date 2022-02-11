import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
  path:'login', component:LoginComponent   
  },
  {
    path:'home', component:HomeComponent   
    },
{ path: '',   component: LoginComponent, pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
