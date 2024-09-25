import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  INavData,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular-pro';

import { DefaultAsideComponent, DefaultFooterComponent, DefaultHeaderComponent, DefaultBreadcrumbComponent } from './';
import { navItems } from './_nav';


function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultAsideComponent,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent,
    DefaultBreadcrumbComponent
  ]
})
export class DefaultLayoutComponent {

  constructor(private ts: TranslateService){}

  public navItems = navItems.map(items => {this.translate(items); return items; });

  ngOnInit(): void {
    this.ts.onLangChange.subscribe(() => {
      const translatedNavs = navItems.map(items => {this.translate(items); return items; });
      this.navItems = [];
      translatedNavs.forEach(val => this.navItems.push(Object.assign({}, val)));
    });
  }

  translate(item: INavData): void {
        if ('variant' in item) {
          const trans = this.ts.instant(`${item.variant}`);
          if (trans !== `${item.name}`) {
            item.name = trans;
          }
        }
        if (item.children && item.children.length > 0) {
          item.children.map( (child: any) => this.translate(child));
        }
  }

  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }
}
