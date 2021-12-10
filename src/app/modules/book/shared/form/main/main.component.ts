//======================================================================
// Modules / Books / Shared / Main Form
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Config */
import { BookConfig } from './../../../book-config';

/* Interfaces */
import { BookInterface } from '../../../interfaces/book';
import { Book } from '../../../classes/book';

/* Services */
import { BookApiService } from '../../../services/book-api.service';
import { BookHttpService } from '../../../services/book-http.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
  selector: 'book-main-form',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class BookMainFormComponent implements OnInit {

  /* States */
  dataLoading: boolean = false; // Data loading - When the update form get a Book data
  submitted: boolean = false; // When the submit button was clicked
  update: boolean = false; // Is the form for Create Or Update entity
  
  /* HTTP Request */
  httpSubmission: boolean = false; // When the form is valid AND the submit button was clicked
  httpContent: any = {};
  httpError: string = null;

  /* Book item */
  book: BookInterface;
  bookID: string = null;
  bookEntity: Book; // Book Class
  bookForm: FormGroup;
  btnSubmitLabel: string = BookConfig.btnSubmitLabel_Create;



  
  cover: File | null = null;
  // // onChange: Function;

  // @HostListener('change', [`$event.target.files`]) emitFiles(event: FileList) {

  //   const file = event && event.item(0);

  //   console.log(event);
  //   console.log(file);
    
  //   // this.onChange(file);
  //   this.cover = file;
  // };

  // // writeValue( value: null ) {
  // //   // clear file input
  // //   this.host.nativeElement.value = '';
  // //   this.cover = null;
  // // }
  
  // // registerOnChange( fn: Function ) {
  // //   this.onChange = fn;
  // // }

  // // registerOnTouched( fn: Function ) {
  // // }

  // // onChange(file: File) {
  // //   this.cover = file;
  // //   console.log( this.cover );
  // // }


  handleCover(element) {
    
    // console.log(element);
    // console.log(element.files);
    // console.log(element.getAttribute('formControlName'));

    this.cover = element.files.item(0);
    console.log( this.cover );

    
  }
  // handleCover(files: FileList) {
    
  //   console.log(files.item(0));
    
  // }



  constructor(
    // private host: ElementRef<HTMLInputElement>,

    private fb: FormBuilder,
    private api: BookApiService,
    private http: BookHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  // Form listener
  get f() { return this.bookForm.controls; }


  ngOnInit() {

    /* Retrieve Book ID */
    // Retrieve the Book ID from the URL parameters
    // this.bookID = parseInt(this.route.snapshot.paramMap.get('id')) || null;
    this.bookID = this.route.snapshot.paramMap.get('id') || null;


    /* Define the "update" process */
    this.update = this.bookID != null ? true : false;


    /* Form Builder */
    // Build the Reactive form Book
    this.bookForm = this.fb.group({

      /* Book Title */
      title: [{
        value: '', 
        disabled: this.dataLoading
      }, Validators.required],

      /* Book Description */
      description: [{
        value: '', 
        disabled: this.dataLoading
      }],

      /* Book Price */
      price: [{
        value: '', 
        disabled: this.dataLoading
      }, Validators.required],

      /* Book Cover */
      cover: [{
        value: '', 
        disabled: this.dataLoading
      } /*  requiredFileType('png') */]
    
    });


    /* Form data Update */
    // Get the Book Data and update the form on Update Page
    if (this.update) {
      this.getBook( this.bookID );
    }
  }


  onSubmit() {

    // Chnage the "submitted" flag status
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookForm.invalid) return;

    // Chnage the "httpSubmission" flag status
    this.httpSubmission = true;

    // Create new Book with form data
    this.bookEntity = new Book(
      this.f.title.value,
      this.f.description.value,
      this.f.price.value,
      this.cover
    );


    // Send HTTP Request to Update the Book
    // Send HTTP Request to Create the Book
    let request: any = this.update 
      ? this.http.update( this.bookID, this.bookEntity )
      : this.http.create( this.bookEntity )

      request.subscribe(
        response => {

          console.log(response.body);
          

          // // Retrieve Full HTTP Response
          // this.httpContent = response.body;

          // // Retrieve "results" from response object
          // this.book = this.httpContent.results;

          // // Redirect to Book details page
          // // this.router.navigate(['/books', this.book.id])
          // this.router.navigate(['/books', {outlets: {
          //   primary: `${this.book.id}`,
          //   sidebar: `${this.book.id}`,
          //   toolbar: `${this.book.id}`,
          //   modal: `${this.book.id}`
          // }}])
        },
        error => {
          this.httpError = error;
          this.httpSubmission = false;
        }
      )
      .add(() => {

      });
    
  }


  getBook(bookID: string) {
    
    // Change the label of Submit button
    this.btnSubmitLabel = BookConfig.btnSubmitLabel_Update;

    // Loading data (the animation)
    this.dataLoading = true;


    // this.api.getBook.subscribe(book => {
    //   // this.bookEntity = new Book(
    //   //   book.title,
    //   //   book.description,
    //   //   book.price
    //   // );
    //   console.log( book );
    // });

    // Get book data
    this.http.read( bookID )
      .subscribe(
        response => {
          // Retrieve content of the HTTP Response
          this.httpContent = response.body;

          // Retrieve the Book item from response object
          this.bookEntity = this.httpContent.book.item;

          // Update form values
          this.bookForm.patchValue( this.bookEntity );
          this.bookForm.enable();
        },
        error => {
          this.httpError = error
        }
      )
      .add(() => {
        this.dataLoading = false;
        // this.http.setLoadingState = false;
      });
  }

}
