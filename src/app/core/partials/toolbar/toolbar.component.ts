//======================================================================
// CORE / PARTIALS : TOOLBAR
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'app-toolbar',
  template: `<router-outlet name="toolbar"></router-outlet>`,
  styleUrls: ['./toolbar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
