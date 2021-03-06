import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargado = false;
  equipo: any[] = [];

  constructor(private http: HttpClient ) {
    //this.cargarInfo();
    this.cargarEquipo();
 }
 private cargarInfo(){
        // console.log('Servicio de infoPagina listo');
        this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargado = true;
          this.info = resp;
          console.log(resp);
        });
 }
 private cargarEquipo(){
  this.http.get('https://angular-html-8b53c.firebaseio.com/equipo.json')
  .subscribe( (resp: any[]) => {
    this.cargado = true;
    this.equipo = resp;
    //console.log(resp);
  });

 }
}
