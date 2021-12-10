//======================================================================
// Modules / Books / Pages / Read / Modal
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------

import { BookInterface } from './../../../interfaces/book';
import { BookApiService } from './../../../services/book-api.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-read-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ReadModalComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  book: BookInterface;

  constructor(
    private api: BookApiService,
    private router: Router
  ) { }

  ngOnInit() {
    // Observable Book
    this.api.getBook.subscribe((book: BookInterface) => {
      this.book = book;
    });
  }

  onConfirm() {
    alert('Yes delete '+ this.book.title);
    
    this.closeModal();
    this.router.navigate(['/books'])
  }
  
  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

}
