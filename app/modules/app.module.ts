import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideDrawerPageComponent } from './side-drawer-page/side-drawer-page.component';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SideDrawerPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
