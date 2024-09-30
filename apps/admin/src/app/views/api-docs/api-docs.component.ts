import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwaggerDevComponent } from '@workspace/api-docs';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  imports: [SwaggerDevComponent,CommonModule],
  templateUrl: './api-docs.component.html',
  styleUrl: './api-docs.component.scss',
})
export class ApiDocsComponent {}

//TODO: nascondere header, select dominio e autenticare con token corrente