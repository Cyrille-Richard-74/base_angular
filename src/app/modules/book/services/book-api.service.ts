//======================================================================
// Modules / Books / Services / Books API
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

import { BookInterface } from './../interfaces/book';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Injectable({
  providedIn: 'root'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class BookApiService {

  private book: BehaviorSubject<BookInterface> = new BehaviorSubject(null);

  constructor() { }

  public get getBook() {
    return this.book;
  }

  public set setBook(book: BookInterface) {
    this.book.next(book);
  }
}
