//======================================================================
// MODULE => HOME
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Routing */
import { HomeRoutingModule } from './home-routing.module';

/* Pages */
import { MainComponent } from './pages/index/main/main.component';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class HomeModule { }
