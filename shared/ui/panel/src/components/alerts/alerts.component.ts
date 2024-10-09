import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule, ButtonCloseDirective, ToasterPlacement, ToastComponent } from '@coreui/angular-pro';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonCloseDirective],
  providers: [{ provide: ToastComponent, useExisting: forwardRef(() => AlertsComponent) }],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
})
export class AlertsComponent {

  message = '';

  type = 'danger';

  visible = true;

  dismissible = true;

  placement = ToasterPlacement.BottomCenter;

}
