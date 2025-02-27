import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'home/electronics',component:ElectronicsComponent},
  {path:'jewelery',component:JeweleryComponent},
  {path:'home/jewelery',component:JeweleryComponent},
  {path:'men',component:MenComponent},
  {path:'home/men',component:MenComponent},
  {path:'women',component:WomenComponent},
  { path: 'details/:id', component: DetailsComponent },
  {path:'home/women',component:WomenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
