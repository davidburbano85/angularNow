import { Item } from './../../models/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()item: Item= new Item(); //vamos a recibir  una propiedad llamada item de tipo de dato Item  
  constructor() { }

  ngOnInit(): void {
  }

}
