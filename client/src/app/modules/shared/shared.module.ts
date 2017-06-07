import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { SDKBrowserModule } from './sdk/index';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdListModule,
    SDKBrowserModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [],
  exports: [  MaterialModule, BrowserAnimationsModule, MdInputModule,
    MdButtonModule, 
     SDKBrowserModule]
})
export class SharedModule { }
