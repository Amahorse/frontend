import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwaggerDevComponent } from '@workspace/api-docs';

@Component({
  standalone: true,
  imports: [ SwaggerDevComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'docs';
}
