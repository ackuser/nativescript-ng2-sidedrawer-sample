import {
  Component, ViewChild, AfterViewInit, NgZone, OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Page } from 'ui/page';
import { isAndroid, isIOS } from 'platform';
import { ActionItem } from 'ui/action-bar';
import {
  RadSideDrawerComponent, SideDrawerType
} from 'nativescript-telerik-ui/sidedrawer/angular';
import {
  PushTransition, SlideInOnTopTransition
} from 'nativescript-telerik-ui/sidedrawer';

@Component({
  selector: 'side-drawer-page',
  templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
  styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css']
})
export class SideDrawerPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

  /**
   * On tap of any side-drawer item, hiding content if this flag is true.
   */
  isContentVisible: boolean = true;

  /**
   * For android using SlideOnTop transition and for iOS, push transition.
   */
  drawerTransition: any;

  private drawer: SideDrawerType;

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private page: Page,
    private ngZone: NgZone
  ) {
    this.setActionBarIcon(this.page);
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }

  ngOnDestroy() {
    this.drawer.off('drawerClosed');
  }

  toggleSideDrawer() {
    this.drawer.toggleDrawerState();
  }

  /**
   * Navigates to next page after drawer is closed.
   */
  navigateTo(routeCommands: any[]) {
    this.drawer.closeDrawer();
  }

  private setActionBarIcon(page: Page) {
    if (isAndroid) {
      page.actionBar.navigationButton = this.getNavigationButton();
    }

    if (isIOS) {
      page.actionBar.actionItems.addItem(this.getNavigationButton());
    }
  }

  private getNavigationButton() {
    let navActionItem = new ActionItem();
    navActionItem.icon = 'res://ic_menu_black';
    if (navActionItem.ios) {
      navActionItem.ios.position = 'left';
    }
    navActionItem.on('tap', this.toggleDrawer.bind(this));
    return navActionItem;
  }

  private toggleDrawer() {
    this.drawer.toggleDrawerState();
  }
}
