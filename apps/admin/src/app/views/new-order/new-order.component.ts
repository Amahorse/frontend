import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B2bService } from '@elements/store/b2b.service';

@Component({
  selector: 'app-new-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-order.component.html',
  styleUrl: './new-order.component.scss',
})
export class NewOrderComponent {

  //TODO: migliorare caricamento modulo con lazy loading, tipizzazione etc 
  public products: any;

  constructor(private b2b: B2bService) {

    /*
    this.b2b.list().subscribe((products) => {
      this.products = products;
    });
    */
  }


}
