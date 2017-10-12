import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {
  DonateBannerComponent,
  DonateFormComponent
} from './components';

const COMPONENTS = [DonateBannerComponent, DonateFormComponent]

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class DonateModule { }
