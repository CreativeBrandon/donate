import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {
  DonateBannerComponent,
  DonateDetailsComponent,
  DonateFormComponent
} from './components';

const COMPONENTS = [DonateBannerComponent, DonateDetailsComponent, DonateFormComponent]

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DonateModule { }
