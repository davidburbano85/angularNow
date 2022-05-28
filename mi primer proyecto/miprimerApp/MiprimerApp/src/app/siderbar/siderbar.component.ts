import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  constructor(private servicioFavoritos: ServicioDeFavoritosService) { }
public listVideos:Array<any>=[]
  ngOnInit(): void 
    {
      this.servicioFavoritos.disparadorDeFavoritos.subscribe(data =>
        {
          this.listVideos.push(data);
        }
    )}

  
}
