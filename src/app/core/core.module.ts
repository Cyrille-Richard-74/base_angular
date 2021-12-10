//======================================================================
// CORE MODULE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//-----------------------------------------------------
// Import Core's components
//-----------------------------------------------------
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { ModalComponent } from './partials/modal/modal.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { ToolbarComponent } from './partials/toolbar/toolbar.component';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { SecurityModule } from './security/security.module';


//-----------------------------------------------------
// Constants Definition
//-----------------------------------------------------
const routes: Routes = [];


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    SidebarComponent,
    ToolbarComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    SecurityModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    SidebarComponent,
    ToolbarComponent,
    TopbarComponent,
  ]
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AppCoreModule { }
