//======================================================================
// CORE / PARTIALS : SIDEBAR
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'app-sidebar',
  template: `<router-outlet name="sidebar"></router-outlet>`,
  styleUrls: ['./sidebar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
