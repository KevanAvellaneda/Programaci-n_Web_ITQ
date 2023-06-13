import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
   /*constructor( public cve_materia: string, public descripcion: string ){ 
    
  }*/

  selectedSubject: string = '0';
  showTable: boolean = false;
  daysOfWeek: string[] = ['Profesor', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  profes: string[] = ['VEGA TERRAZAS MARTIN', 'GONZALEZ GUTIERREZ ABRAHAM', 'MONTES ALMANZA MA. ELENA',
                      'RAMIREZ - PEDRO CELESTINO', 'BUENO QUIÑONES MARIBEL', 'MENDOZA CONTRERAS JULIO CESAR',
                      'VARELA PEREZ LUZ PERLA','ARROYO DELGADO GUSTAVO', 'FERNANDEZ ROMERO GUILLERMO', 
                      'DE LEON MARTINEZ JESUS', 'BELTRAN VALENZUELA NANCY JUDITH', 'GUZMAN RIVERA MIGUEL ANGEL', 
                      'CASASOLA CERVERA XANATL DONAJI', 'DIAZ SANCHEZ RICARDO','DE LA FUENTE BERMUDEZ SANDRA LUCIA',
                      'LOPEZ FOSADO MANUEL TEZOZOMOC','ALCANTARA LLANAS IVONNE TATIANA',
                      'MEJIA RODRIGUEZ LUIS FELIPE', 'FERNANDEZ ROMERO LAURA LUCIA', 'LOPEZ MARTINEZ TULIO SANTIAGO',
                      'JAIMES RAMIREZ JOSE MIGUEL','ZARATE CONTRERAS ALDO ENRIQUE'];     
                                  
  materias: string[] = ['Matemáticas Discretas', 'Fundamentos de Programación', 'Principios Electronicos y Aplicaciones Digitales',
                        'Programación Orientada a Objetos', 'Estructuras de Datos', 'Métodos Numéricos', 'Lenguajes de Interfaz',
                        'Tópicos Avanzados Programación', 'Lenguajes y Automatas I', 'Lenguajes y Automatas II', 'Fundam. Telecomunicaciones',
                        'Sistemas Operativos', 'Sistemas Programables','Graficación','Arquitectura de computadoras',
                        'Redes de Computadoras','Taller Sistemas Operativos','Programación Lógica y Funciona', 'Conm. y Enrut. Redes de Datos',
                        'Prog. Dist. y en la Nube', 'Inteligencia Artificial', 'Taller de Bases de Datos', 
                        'Fundam. Ingeniería de Software','Administración de Redes','Ciencia de Datos',
                        'Programación Web', 'Administración Bases de Datos', 'Ingeniería de Software', 'Seg. de Redes y Comp. en Nube',
                        'Arquitectura Orientada a Servicios', 'Taller de Des. Ágil de Sw.', 'Gestión de Proy de Software'];
  hours: string[] = ['08:00 AM - 09:00 AM', '09:00 AM - 10:00 PM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM', '04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM', '07:00 PM - 08:00 PM'];

  /*constructor(private databaseService: DatabaseService) { }
  getData(): void {
    this.databaseService.getTableData().subscribe(data => {
      console.log(data); // Haz algo con los datos recibidos
    });
  }*/


  generateTable(event: any) {
    const selectedValue = event.target.value;
  
    // Reset the table
    this.showTable = false;
  
    if (selectedValue !== '0') {
      // Generate the tabl
      this.showTable = true;
    }

  }
}
