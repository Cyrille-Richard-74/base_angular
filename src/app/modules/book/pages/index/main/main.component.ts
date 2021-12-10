//======================================================================
// Modules / Books / Pages / Index / Main
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//-----------------------------------------------------
// Import Project's Components
//-----------------------------------------------------

/* Interfaces */
import { PaginationInterface } from '../../../../../shared/interfaces/pagination';

/* Services */
import { TitleService } from '../../../../../core/services/title/title.service';

//-----------------------------------------------------
// Import Module's Components
//-----------------------------------------------------

/* Interfaces */
import { BookInterface } from './../../../interfaces/book';

/* Services */
import { BookHttpService } from './../../../services/book-http.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-index-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class IndexMainComponent implements OnInit {

  /* States */
  dataLoading: boolean = true; // Data loading
  pageReady: boolean = false; // Page is ready / loaded for first time
  
  /* HTTP Request */
  httpContent: any = {};
  httpError: string = null;

  /* Book */
  books: BookInterface[];
  pagination: PaginationInterface;


  constructor(
    private http: BookHttpService,
    private route: ActivatedRoute,
    private title: TitleService
  ) {}

  ngOnInit() {

    // Set page title
    this.route.data.subscribe(data => {
      this.title.setTitle = data.title;
    });

    // Get Books list
    this.getBooks(1);

  }

  /**
   * Get Books List
   * 
   * @param number page number
   */
  getBooks(page: number = 1) {

    // Change data loading flag
    this.dataLoading = true;

    // Get books list (by BookHttp Service)
    this.http.list(page)
      .subscribe(
        response => {
          // Retrieve content of the HTTP Response
          this.httpContent = response.body;
          
          // Retrieve the list of books from response object
          this.books = this.httpContent.books.items;

          // Retrieve "Pager / Pagination data" from response object 
          this.pagination = this.httpContent.books.pagination;
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
