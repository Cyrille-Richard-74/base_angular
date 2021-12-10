//======================================================================
// CORE / AUTHENTICATION : USER INTERFACE
//======================================================================

//-----------------------------------------------------
// Interface Export
//-----------------------------------------------------
export interface UserInterface {
    id: number;
    firstname: string;
    lastname: string;
    fullname?: string;
    email: string;
    password: string;
    roles: string;
    token?: string;
}
