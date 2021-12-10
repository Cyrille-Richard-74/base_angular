//======================================================================
// Modules / Books / Pages / Update / Main
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//-----------------------------------------------------
// Import Project's Components
//-----------------------------------------------------

/* Services */
import { TitleService } from '../../../../../core/services/title/title.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-update-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class UpdateMainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private title: TitleService
  ) {}

  ngOnInit() {

    // Set page title
    this.route.data.subscribe(data => {
      this.title.setTitle = data.title;
    });
  }

}
