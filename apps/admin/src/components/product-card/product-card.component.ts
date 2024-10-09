import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Product } from '@elements/store/products.interface';
import { TranslateModule } from '@ngx-translate/core';
import { cilPlus } from '@coreui/icons'; // Importa l'icona
import { IconSetService, IconModule } from '@coreui/icons-angular'; // Importa IconSetService e IconModule
import { DistinctCodePipe } from 'shared/pipes/distinct-code.pipe'; // Importa il pipe

import {
  BorderDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  TextColorDirective,
  CollapseModule,
  ColComponent,
  RowComponent,
  CollapseDirective,
} from '@coreui/angular-pro';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    NgTemplateOutlet,
    CardTitleDirective,
    CardTextDirective,
    CardSubtitleDirective,
    CardLinkDirective,
    RouterLink,
    ListGroupDirective,
    ListGroupItemDirective,
    CardFooterComponent,
    BorderDirective,
    CardGroupComponent,
    GutterDirective,
    CardImgDirective,
    TranslateModule,
    CollapseModule,
    RowComponent,
    ColComponent,
    CollapseDirective,
    IconModule, 
    DistinctCodePipe
  ],
})
export class ProductCardComponent {
  @Input() product?: Product;
  icons = { cilPlus }; // Definisci l'icona

  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { cilPlus }; // Imposta l'icona nel servizio
  }

  visible = [false, false];

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }
}
