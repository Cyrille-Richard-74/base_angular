//======================================================================
// CORE / PARTIALS : MODAL
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'app-modal',
  template: `<router-outlet name="modal"></router-outlet>`,
  styleUrls: ['./modal.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
