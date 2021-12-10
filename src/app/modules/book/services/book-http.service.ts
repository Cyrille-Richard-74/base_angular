//======================================================================
// Modules / Books / Services / Books HTTP
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { first } from 'rxjs/operators';

//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------

import { ApiService } from './../../../core/http/api.service';

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

export class BookHttpService {

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {}

  /**
   * HTTP Request to List all books
   */
  list(page: number = 1): Observable<HttpResponse<BookInterface[]>> 
  {
    let params = new HttpParams().set("page", `${page}`);

    return this.http
      .get<BookInterface[]>(`books`, {observe: 'response', params: params})
      .pipe(first());
  }

  /**
   * HTTP Request to Create a book
   */
  create(book: BookInterface): Observable<HttpResponse<BookInterface>> 
  {
    return this.http
      .post<BookInterface>(`book`, book, {observe: 'response'})
      .pipe(first());
  }

  /**
   * HTTP Request to Read a book details
   */
  read(bookID: string): Observable<HttpResponse<BookInterface>> 
  {
    let params = new HttpParams().set('scope', "comments");

    console.log(bookID);
    

    return this.http
      .get<BookInterface>(`book/${bookID}`, {observe: 'response', params: params})
      .pipe(first());
  }

  /**
   * HTTP Request to Update a book
   */
  update(bookID: string, book: BookInterface): Observable<HttpResponse<BookInterface>> 
  {
    return this.http
      .put<BookInterface>(`book/${bookID}`, book, { observe: 'response' })
      .pipe(first());
  }

  /**
   * HTTP Request to Delete a book
   */
  delete(bookID: string) 
  {
    // return this.api
    //   .delete(`${this.endpoint( bookID )}`)
    //   .pipe(catchError(this.handleError));
  }
}
