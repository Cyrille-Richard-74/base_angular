//======================================================================
// SHARED => LOADER MODULE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-----------------------------------------------------
// Import Module's Component
//-----------------------------------------------------
import { AppLoaderComponent } from './loader.component';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@NgModule({
  declarations: [AppLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [AppLoaderComponent]
})
export class AppLoaderModule { }
