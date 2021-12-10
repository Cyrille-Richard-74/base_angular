//======================================================================
// MODULE => UNDERWEAR : HTTP UNDERWEAR SERVICE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------
import { AppConfig } from '../../../configs/app.config';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Injectable({
  providedIn: 'root'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class TitleService {

  // private defaultTitle: String = "Netlab App Boilerplate";
  private title: BehaviorSubject<String> = new BehaviorSubject(`${AppConfig.appTitle}`);

  constructor(
    private titleService: Title
  ) { }

  public get getTitle() {
    return this.title;
  }

  public set setTitle(title: string) {

    // Set title in page
    this.title.next(title);

    // Set document title
    this.titleService.setTitle(`${AppConfig.appTitle} : ${title}`);
  }

}
