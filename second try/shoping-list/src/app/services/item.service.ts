import { Item } from './../models/item';
import { Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string="http://localhost:3001/items";
  httpOptions=
    {
      headers:
        {
         "Content-Type": "application/json"
        }
    }
  items:Item[] = [
    {
      id:0,
      title:"manzana",
      price:10.5,
      quantity:4,
      completed:false
    },
    {
      id:1,
      title:"pan",
      price:3.5,
      quantity:8,
      completed:true
    },
    {
      id:2,
      title:"chamarra",
      price:300,
      quantity:1,
      completed:false
    }
  ];
  constructor(private http:HttpClient) { }

          //************OBTENER********** */
  getItems():Observable<Item[]>
   {
    // this.items=
    //return this.items;
    return this.http.get<Item[]>(this.url);
   }

            //*********AÑADIR********** */
   addItem(item:Item):Observable<Item>
    {
      // this.items.unshift(item);
      return this.http.post<Item>(this.url, item, this.httpOptions);
    }
        //***********ACTUALIZAR******** */
  toggleItem(item:Item):Observable<Item>
    {
      return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
    }  

          //**********ELIMINAR******** */
  deleteItem(item:Item):Observable<Item>
    {
      return this.http.delete<Item>(this.url + item.id );
    }
}
