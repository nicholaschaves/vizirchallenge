import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [

  {
    path: 'landing-page', component: LandingPageComponent
  },
  {
    path: '', component: LandingPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
