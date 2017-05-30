import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls/controls.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [ControlsComponent],
  exports: [ControlsComponent]
})
export class BoardModule { }
