import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent {
  nombre: string="";
  fecha: string="";
  hora: string="";
  sintomas: string="";

  formularioIncorrecto: boolean = false;
  //escribe el decorador y enter para agregar al import y no marque error
  @Output() nuevaCita = new EventEmitter<any>();
  constructor()
  {

  }


agregarCita()
  {
    if(this.nombre=='' || this.fecha=='' || this.hora=='' || this.sintomas=='')
    {
      this.formularioIncorrecto = true;
      return; //para salir del metodo
    }
    this.formularioIncorrecto = false;
    //creamos un objeto para enviarselo al padre
    const CITA =
    {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log('soy el hijo');
    this.nuevaCita.emit(CITA); //pasamos el objeto al padre
    this.resetCampos();
  }
  resetCampos() //inicializamos
  {
    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas='';
  }

}

