//======================================================================
// Modules / Books / Shared / Sidebar
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class SharedSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
