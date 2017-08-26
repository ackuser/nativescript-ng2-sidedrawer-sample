import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';
import { SideDrawerPageComponent } from './side-drawer-page/side-drawer-page.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SideDrawerPageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
