import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B2bService } from '@elements/store/b2b.service';
import { ProductCardComponent } from 'apps/admin/src/components/product-card/product-card.component';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular-pro';

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RowComponent, ColComponent, ContainerComponent],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss',
})
export class NewOrderComponent {

  //TODO: migliorare caricamento modulo con lazy loading, tipizzazione etc 
  public products: any;

  constructor(private b2b: B2bService) {

    this.b2b.list().subscribe((products) => {
      this.products = products;
    });
    
  }


}
