import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {delay} from 'rxjs/operators';
import {LoadingService} from '../../services/loading.service';

//https://medium.com/swlh/angular-loading-spinner-using-http-interceptor-63c1bb76517b

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {

  constructor(
    private _loading: LoadingService
  ){ }

  loading: boolean = false;

  ngOnInit() {
    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {

    this.loading = this._loading.loadingSub.value;

    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }


}

