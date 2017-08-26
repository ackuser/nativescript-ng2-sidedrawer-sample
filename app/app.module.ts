import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';

import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';
import { SideDrawerPageComponent } from './side-drawer-page/side-drawer-page.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    AppComponent,
    SideDrawerPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
