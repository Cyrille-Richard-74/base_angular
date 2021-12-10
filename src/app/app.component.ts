//======================================================================
// APP BASE COMPONENT
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Component } from '@angular/core';

//-----------------------------------------------------
// Import Project modules and components
//-----------------------------------------------------
import { AppConfig } from './configs/app.config';

/* Services */
import { TitleService } from './core/services/title/title.service';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AppComponent {

  title: String = AppConfig.appTitle;
  pageTitle: String;

  constructor(private titleService: TitleService) {

    this.titleService.getTitle.subscribe(title => {
      this.pageTitle = title;
    })
  }
}
