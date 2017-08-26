import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home/home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  text: string = 'Home Page';
}
