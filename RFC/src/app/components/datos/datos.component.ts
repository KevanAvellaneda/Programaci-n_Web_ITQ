import { Component} from '@angular/core';
//import { RfcGenerador } from 'src/app/models/rfc-Generador';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  //instancerfc = new RfcGenerador();
  nombre: string="";
  apellidop: string="";
  apellidom: string="";
  fecha: string="";
  rfcGenerado: string="";
  

  formularioIncorrecto: boolean = false;

  constructor(){

  }

  resetCampos(){
    this.nombre='';
    this.fecha='';
    this.apellidop='';
    this.apellidom='';
    this.rfcGenerado='';
  }
  
  
  vocales = ['A','E','I','O','U']
  calcularRFC(){
    const formatoapellidos = this.tomarapellidos(this.apellidop, this.apellidom);
    const formatonombre = this.tomarnombre(this.nombre);
    const formatofecha = this.tomarfecha(this.fecha);

    if(this.apellidom == ''){
      const rfcGenerado = formatoapellidos + formatofecha;
      const homoclave = this.calcularHomoclave();
      return rfcGenerado + homoclave;
    }
    else {
      const rfcGenerado = formatoapellidos + formatonombre + formatofecha;
      const homoclave = this.calcularHomoclave();
      return rfcGenerado + homoclave;
    }
    
    
  }

  tomarapellidos(apellidop: string, apellidom: string): string {
    // primera letra del primer apellido
    let formatoapellidos = this.apellidop.substr(0, 1);
    // primera vocal del primer apellido
    const vocal = this.tomarVocal(this.apellidop);
    if (vocal > 1) {
      formatoapellidos += this.apellidop.substr(vocal, 1);
    } else {
      formatoapellidos += this.apellidop.substr(1, 1);
    }
    // primera letra del segundo apellido
    formatoapellidos += this.apellidom.substr(0, 1);

    if (apellidom == ''){
      formatoapellidos += this.nombre.substr(0,2);
      return formatoapellidos;
    }

    return formatoapellidos;
  }

  tomarnombre(nombre: string): string {
    // primera letra del nombre
    let formatonombre = this.nombre.substr(0, 1);
    return formatonombre;
  }

  tomarfecha(fecha: string): string {
    // últimos dos dígitos del año de nacimiento
    const anio = this.fecha.substring(8,10);
    // mes de nacimiento en dos dígitos
    const mes = this.fecha.substring(3,5);
    // día de nacimiento en dos dígitos
    const dia = this.fecha.substring(0,2);

    return anio + mes + dia;
  }

  tomarVocal(letra: string): number {
    for (let i = 1; i < letra.length; i++) {
      if (this.vocales.indexOf(letra.charAt(i).toUpperCase()) !== -1) {
        return i;
      }
    }
    return -1;
  }

  calcularHomoclave(): string{
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const letra = letras.charAt(Math.floor(Math.random()*letras.length));
    const result = num1.toString() + letra + num2.toString();
    return result;
  }

  generarRFC(){
    this.rfcGenerado = this.calcularRFC();
  }
}
