import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

@Component({
  selector: 'swagger-public',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swagger-public.component.html',
  styleUrls: ['./swagger-public.component.scss'],
})
export class SwaggerPublicComponent implements OnInit {

  ngOnInit() {

    SwaggerUIBundle({
      urls: [
        {
          name: "V1",
          url: "http://api.amahorse.localhost/docs",
        },
      ],
      domNode: document.getElementById("swagger-ui"),
      deepLinking: true,
      presets: [SwaggerUIBundle["presets"].apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout",
    });

  }



}
