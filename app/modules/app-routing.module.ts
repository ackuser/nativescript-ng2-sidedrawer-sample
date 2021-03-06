import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
