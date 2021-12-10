//======================================================================
// APP BASE ROUTING
// Do nothing here. This is just the base of routing
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//-----------------------------------------------------
// Constantes Definition
//-----------------------------------------------------
const routes: Routes = [];


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
export class AppRoutingModule { }
