//======================================================================
// MODULE => BOOK : ROUTING
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
import { BookConfig } from './book-config';

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
// Constantes Definition
//-----------------------------------------------------

const routes: Routes = [{
  path: 'books',
  // canActivate: [AuthGuard], // [NoAuthGuard],
  data: { title: BookConfig.moduleTitle },
  children: [

    // Index
    { path: '', pathMatch: 'full', outlet: 'primary', component: IndexMainComponent },
    { path: '', pathMatch: 'full', outlet: 'sidebar', component: IndexSidebarComponent },
    { path: '', pathMatch: 'full', outlet: 'toolbar', component: SharedToolbarComponent },
    { path: '', pathMatch: 'full', outlet: 'modal', component: SharedModalComponent },

    // Create
    { path: 'create', pathMatch: 'full', outlet: 'primary', component: CreateMainComponent },
    { path: 'create', pathMatch: 'full', outlet: 'sidebar', component: CreateSidebarComponent },
    { path: 'create', pathMatch: 'full', outlet: 'toolbar', component: SharedToolbarComponent },
    { path: 'create', pathMatch: 'full', outlet: 'modal', component: SharedModalComponent },

    // Read
    { path: ':id', pathMatch: 'full', outlet: 'primary', component: ReadMainComponent },
    { path: ':id', pathMatch: 'full', outlet: 'sidebar', component: ReadSidebarComponent },
    { path: ':id', pathMatch: 'full', outlet: 'toolbar', component: ReadToolbarComponent },
    { path: ':id', pathMatch: 'full', outlet: 'modal', component: ReadModalComponent },

    // Update
    { path: ':id/edit', pathMatch: 'full', outlet: 'primary', component: UpdateMainComponent },
    { path: ':id/edit', pathMatch: 'full', outlet: 'sidebar', component: UpdateSidebarComponent },
    { path: ':id/edit', pathMatch: 'full', outlet: 'toolbar', component: UpdateToolbarComponent },
    { path: ':id/edit', pathMatch: 'full', outlet: 'modal', component: ReadModalComponent },

  ]
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

export class BookRoutingModule { }
