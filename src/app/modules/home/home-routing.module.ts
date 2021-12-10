//======================================================================
// MODULE => HOME : ROUTING
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------

import { AuthGuard } from './../../core/guards/auth.guard';
import { NoAuthGuard } from './../../core/guards/no-auth.guard';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Config */
import { HomeConfig } from './home-config';

/* Pages */
import { MainComponent } from './pages/index/main/main.component';



//-----------------------------------------------------
// Constantes Definition
//-----------------------------------------------------

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainComponent,
  canActivate: [NoAuthGuard],
  outlet: 'primary', 
  data: {title : HomeConfig.moduleTitle}
}];



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class HomeRoutingModule { }
