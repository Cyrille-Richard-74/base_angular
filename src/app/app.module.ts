//======================================================================
// APP BASE MODULE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//-----------------------------------------------------
// Import Extrenal Libraries
//-----------------------------------------------------
import { ToastrModule } from 'ngx-toastr';
import { ToastrConfig } from './configs/toastr.config';

//-----------------------------------------------------
// Import Project's components
//-----------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppCoreModule } from './core/core.module';
import { AppModulesModule } from './modules/modules.module';

/* Interceptors */
import { ApiEndPoint } from './core/interceptors/api-endpoint.interceptor';
import { ErrorHandler } from './core/interceptors/error-handler.interceptor';

/* Shared Components */
import { CollapseButtonComponent } from './shared/components/buttons/collapse-button/collapse-button.component';
import { SettingsButtonComponent } from './shared/components/buttons/settings-button/settings-button.component';

/* Shared Pipes */
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,

    // Shared Components
    CollapseButtonComponent,
    SettingsButtonComponent,

    // Shared Pipes
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ToastrModule.forRoot(ToastrConfig),

    AppRoutingModule,
    AppCoreModule,
    AppModulesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiEndPoint, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandler, multi: true },
  ],
  bootstrap: [AppComponent]
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AppModule { }
