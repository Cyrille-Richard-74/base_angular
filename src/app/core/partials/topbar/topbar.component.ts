//======================================================================
// CORE / PARTIALS : TOPBAR
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Definition
//-----------------------------------------------------

@Component({
  selector: 'app-topbar',
  template: `<router-outlet name="topbar"></router-outlet>`,
  styleUrls: ['./topbar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
