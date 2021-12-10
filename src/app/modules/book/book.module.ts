//======================================================================
// Modules / Books / Module
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-----------------------------------------------------
// Import Extrenal Libraries
//-----------------------------------------------------

// import { NgxPaginationModule } from 'ngx-pagination';

//-----------------------------------------------------
// Import Project's components
//-----------------------------------------------------

import { AppLoaderModule } from './../../shared/components/loader/loader.module';


//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Routing & Form */
import { BookRoutingModule } from './book-routing.module';
import { BookFormModule } from './book-form.module';

/* Common Partials of module */
import { SharedModalComponent } from './shared/modal/modal.component';
import { SharedSidebarComponent } from './shared/sidebar/sidebar.component';
import { SharedToolbarComponent } from './shared/toolbar/toolbar.component';

/* Pages components */
import { IndexMainComponent } from './pages/index/main/main.component';
import { IndexModalComponent } from './pages/index/modal/modal.component';
import { IndexSidebarComponent } from './pages/index/sidebar/sidebar.component';
import { IndexToolbarComponent } from './pages/index/toolbar/toolbar.component';

import { CreateMainComponent } from './pages/create/main/main.component';
import { CreateModalComponent } from './pages/create/modal/modal.component';
import { CreateSidebarComponent } from './pages/create/sidebar/sidebar.component';
import { CreateToolbarComponent } from './pages/create/toolbar/toolbar.component';

import { ReadMainComponent } from './pages/read/main/main.component';
import { ReadModalComponent } from './pages/read/modal/modal.component';
import { ReadSidebarComponent } from './pages/read/sidebar/sidebar.component';
import { ReadToolbarComponent } from './pages/read/toolbar/toolbar.component';

import { UpdateMainComponent } from './pages/update/main/main.component';
import { UpdateModalComponent } from './pages/update/modal/modal.component';
import { UpdateSidebarComponent } from './pages/update/sidebar/sidebar.component';
import { UpdateToolbarComponent } from './pages/update/toolbar/toolbar.component';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@NgModule({
  declarations: [

    // Common Partials
    SharedModalComponent,
    SharedSidebarComponent,
    SharedToolbarComponent,

    // Pages components
    IndexMainComponent,
    IndexModalComponent,
    IndexSidebarComponent,
    IndexToolbarComponent,

    CreateMainComponent,
    CreateModalComponent,
    CreateSidebarComponent,
    CreateToolbarComponent,

    ReadMainComponent,
    ReadModalComponent,
    ReadSidebarComponent,
    ReadToolbarComponent,

    UpdateMainComponent,
    UpdateModalComponent,
    UpdateSidebarComponent,
    UpdateToolbarComponent
  ],
  imports: [
    /* Angular modules */
    CommonModule,

    /* External modules */
    // NgxPaginationModule,

    /* Project modules */
    AppLoaderModule,

    /* Local modules */
    BookRoutingModule,
    BookFormModule
  ]
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class BookModule { }
