//======================================================================
// SHARED => LOADER COMPONENT
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Component } from '@angular/core';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'app-loader',
  template: `
  <div>
    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke-linecap="round" r="32" stroke-width="6" stroke="#484848" stroke-dasharray="50 50" transform="rotate(39.8112 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" begin="0s" repeatCount="indefinite"></animateTransform>
      </circle>
    </svg>
    loading
  </div>`
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AppLoaderComponent { }
