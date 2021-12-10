//======================================================================
// Modules / Books / Pages / Read / Main
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
// Import Module's Components
//-----------------------------------------------------

/* Interfaces */
import { BookInterface } from './../../../interfaces/book';

/* Services */
import { BookApiService } from './../../../services/book-api.service';
import { BookHttpService } from './../../../services/book-http.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-read-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ReadMainComponent implements OnInit {

  /* States */
  dataLoading: boolean = true; // Data loading
  pageReady: boolean = false; // Page is ready / loaded for first time
  
  /* HTTP Request */
  httpContent: any = {};
  httpError: string = null;

  /* Book */
  book: BookInterface;
  bookID: string;


  constructor(
    private api: BookApiService,
    private http: BookHttpService,
    private route: ActivatedRoute,
    private title: TitleService
  ) {}

  ngOnInit() {

    // Set page title
    this.route.data.subscribe(data => {
      this.title.setTitle = data.title;
    });

    // Item ID from url
    // this.bookID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookID = this.route.snapshot.paramMap.get('id');

    // Get book details
    this.getBook( this.bookID );
  }

  getBook(bookID: string) {

    // Change data loading flag
    this.dataLoading = true;

    // Get book details (by BookHttp Service)
    this.http.read(bookID)
      .subscribe(
        response => {
          // Retrieve content of the HTTP Response
          this.httpContent = response.body;
          
          // Retrieve the Book item from response object
          this.book = this.httpContent.book.item;

          this.api.setBook = this.book;
        },
        error => {
          this.httpError = error;
        }
      )
      .add(() => {
        this.dataLoading = false;
        this.pageReady = true;
      });

  }

}
