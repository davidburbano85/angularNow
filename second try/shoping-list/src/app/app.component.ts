import { Component } from '@angular/core';

@Component({//decoradores
  selector: 'app-root',//hace referencia a la etiqueta de 
  templateUrl: './app.component.html',//la direccion http
  styleUrls: ['./app.component.css']
})
export class AppComponent {//exporta la clase llamada app component
  title = 'Aplicacion de compras';
}

//el nombre del selector no debe ser siempre igual a la clase 
//selector: "app-root" pero class ="AppComponent"
