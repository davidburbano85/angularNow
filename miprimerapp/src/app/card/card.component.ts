import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public image:string="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.discogs.com%2F_HZmSXPtOANOQHmoTC2XwfnOsmUHD5xcBYtcvxA5ZAE%2Frs%3Afit%2Fg%3Asm%2Fq%3A40%2Fh%3A300%2Fw%3A300%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9BLTE4ODM5%2FLTE1OTk3NjM3NjYt%2FMjMxNi5qcGVn.jpeg&imgrefurl=https%3A%2F%2Fwww.discogs.com%2Fes%2Fartist%2F18839-Metallica&tbnid=Pb6oaPCj85mX7M&vet=12ahUKEwjaycCuwv33AhUbajABHcx6AzQQMygBegUIARDaAQ..i&docid=jE0ZD-YBNkVEBM&w=231&h=300&q=metallica&ved=2ahUKEwjaycCuwv33AhUbajABHcx6AzQQMygBegUIARDaAQ"
public titulo:string="angular con interpolacion"
  constructor() { }

  ngOnInit(): void {
  }

}
