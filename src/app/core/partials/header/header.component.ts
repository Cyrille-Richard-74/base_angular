//======================================================================
// CORE / PARTIALS : HEADER
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';


//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------

import { AppConfig } from './../../../configs/app.config';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class HeaderComponent implements OnInit {

  title: String = AppConfig.appTitle;

  constructor() { }

  ngOnInit() {
  }

}
