//======================================================================
// Modules / Books / Form Module
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//-----------------------------------------------------
// Import Module's forms components
//-----------------------------------------------------

import { BookMainFormComponent } from './shared/form/main/main.component';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@NgModule({
  declarations: [BookMainFormComponent],
  exports: [BookMainFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class BookFormModule { }
