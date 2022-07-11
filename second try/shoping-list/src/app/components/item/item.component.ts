import { Item } from './../../models/item';
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()item: Item= new Item(); //vamos a recibir  una propiedad llamada item de tipo de dato Item  
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(item:Item)//este es ek objeto  
  {
     this.deleteItem.emit(item);
  }

  onToggle(item:Item)
  {
    item.completed =!item.completed;
    this.toggleItem.emit(item);
  }
}
