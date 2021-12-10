//======================================================================
// Modules / Books / Pages / Index / Toolbar
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-index-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class IndexToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
