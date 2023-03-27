import { NotfoundComponent } from './creatcomponents/notfound/notfound.component';
import { HomeComponent } from './creatcomponents/home/home.component';
import { CONTACtComponent } from './creatcomponents/contact/contact.component';
import { PORTFOLIOComponent } from './creatcomponents/portfolio/portfolio.component';
import { ABOUTComponent } from './creatcomponents/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:'',component:HomeComponent},
  {path:'portfolio',component:PORTFOLIOComponent},
  {path:'about',component:ABOUTComponent},
  {path:'contact',component:CONTACtComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
