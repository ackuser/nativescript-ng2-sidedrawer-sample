import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <ActionBar title="Home">
  </ActionBar>
  <side-drawer-page>
    <GridLayout class="home-page p-30">
        <Label
            class="h1 page-text"
            [text]="text"
            textWrap="true">
        </Label>
    </GridLayout>
  </side-drawer-page>
  `})
export class AppComponent {

}
