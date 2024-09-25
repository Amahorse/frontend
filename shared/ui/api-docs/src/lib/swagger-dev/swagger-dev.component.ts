import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

@Component({
  selector: 'swagger-dev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swagger-dev.component.html',
  styleUrls: ['./swagger-dev.component.scss'],
})


export class SwaggerDevComponent implements OnInit {

  

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
