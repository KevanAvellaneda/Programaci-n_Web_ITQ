import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listadoCitas: any; // Este objeto debe corresponder con el del padre donde lo usaremos
  @Output() deleteCita = new EventEmitter<number>();
  contstructor()
  {

  }
  ngOnInit(): void 
  {
    
  }
  eliminarCita(index: number)
  {
    this.deleteCita.emit(index); //lo pasamos al componente padre
  }

}
