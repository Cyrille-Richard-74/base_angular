//======================================================================
// Modules / Books / Interfaces / Book
//======================================================================

//-----------------------------------------------------
// Interface Export
//-----------------------------------------------------

export interface BookInterface {
    id?: string;
    title: string;
    description?: string;
    price: number;
    cover?: File;
}
