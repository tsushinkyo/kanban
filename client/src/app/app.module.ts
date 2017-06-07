// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Redux
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'; 
import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { CounterActions } from './app.actions'; 

// Loopback
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
    NgReduxModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    SharedModule,
    LoginModule,
    BoardModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }
 }
