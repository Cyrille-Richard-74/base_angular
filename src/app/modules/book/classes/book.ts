//======================================================================
// Modules / Books / Classes / Book
//======================================================================

import { BookInterface } from './../interfaces/book';

//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class Book implements BookInterface {
    constructor(
        public title: string,
        public description: string,
        public price: number,
        public cover?: File,
        public id?: string,
    ){
        this.title = title;
        this.description = description;
        this.price = price;
        this.cover = cover;
        this.id = id;
    }
}