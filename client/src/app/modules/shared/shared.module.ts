import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { SDKBrowserModule } from './sdk/index';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdCheckboxModule,
    MdListModule,
    SDKBrowserModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [],
  exports: [  MaterialModule, MdInputModule,
    MdButtonModule, 
     SDKBrowserModule]
})
export class SharedModule { }
