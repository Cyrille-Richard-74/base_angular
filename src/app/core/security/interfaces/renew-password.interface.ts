//======================================================================
// CORE / AUTHENTICATION : RENEW PASSWORD INTERFACE
//======================================================================

//-----------------------------------------------------
// Interface Export
//-----------------------------------------------------
export interface RenewPasswordInterface {
    passwordOld: string;
    passwordNew: string;
    passwordConfirmation: string;
}
