//======================================================================
// Modules / Books / Pages / Read / Toolbar
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-read-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ReadToolbarComponent implements OnInit {

  bookID: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    // Item ID from url
    // this.bookID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookID = this.route.snapshot.paramMap.get('id');

  }

}
