import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[] = []; //este objeto padre
  title: any;

  agregarCita(cita: any)
  {
    console.log("soy el padre");
    console.log(cita);
    this.listCitas.push(cita);
  }
  eliminarCitaListado(index: number)
  {
    this.listCitas.splice(index,1); //eliminamos desde la posicion solo un registro
  }
}
