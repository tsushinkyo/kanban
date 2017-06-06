import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SDKBrowserModule } from './modules/shared/sdk/index';


//My modules
import { SharedModule } from  './modules/shared/shared.module';
import { BoardModule } from './modules/board/board.module';
import { RoutingModule } from './modules/routing/routing.module';
import { LoginModule } from './modules/login/login.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    SharedModule,
    LoginModule,
    BoardModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
