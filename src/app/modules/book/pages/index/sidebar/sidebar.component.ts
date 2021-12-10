//======================================================================
// Modules / Books / Pages / Index / Sidebar
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-index-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class IndexSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
