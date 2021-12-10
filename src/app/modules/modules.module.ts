//======================================================================
// MODULES MODULE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { NgModule } from '@angular/core';

//-----------------------------------------------------
// Import Module's modules
//-----------------------------------------------------

import { HomeModule } from './home/home.module';
import { BookModule } from './book/book.module';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    BookModule
  ]
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class AppModulesModule { }
