import { model } from './models/miPrimerModelo';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RestService {

  public miModelo:model[]=[]
  
  constructor(private http: HttpClient) { }

  // public traerInfo():model[]{
  //   this.http.get<model[]>('https://localhost:7173/WeatherForecast/traerTodaLaInfo').subscribe(tales=>{
  //     console.log(tales)
  //     this.miModelo=tales
  //   })
  //   return this.miModelo
  // }

    public get(url:string)
    {
      return this.http.get(url);//get https://localhost:7173/Album/traerTodaLaInfo
    }

}



