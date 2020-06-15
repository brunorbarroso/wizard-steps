import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardCardComponent } from './shared/components/wizard-card/wizard-card.component';
import { WizardItemComponent } from './shared/components/wizard-card/wizard-item/wizard-item.component';
import { WizardLineComponent } from './shared/components/wizard-card/wizard-line/wizard-line.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WizardCardComponent,
    WizardItemComponent,
    WizardLineComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
