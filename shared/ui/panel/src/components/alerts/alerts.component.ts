import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from '@coreui/angular-pro';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
})
export class AlertsComponent {

  message = 'This is an alert';

  type = 'error';

  visible = true;

  dismissible = true;

}

//https://coreui.io/angular/docs/components/toast/