import { Component, Input } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { RfcGenerador } from 'src/app/models/rfc-generador';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent {
  instancerfc = new RfcGenerador();
  listEmpleados: Empleado[] = [{
    No: 19141141,
    RFC: '',
    Nombre_completo: 'VANESSA',
    Apellido_paterno: 'FERNANDEZ',
    Apellido_materno: '',
    Sexo: 'femenino',
    Salario: 56030,
    fechanac: '07/12/2000'
  },

  {No: 19141201,
    RFC: '',
    Nombre_completo: 'ESTEFANIA',
    Apellido_paterno: 'SANCHEZ',
    Apellido_materno: 'TREJO',
    Sexo: 'femenino',
    Salario: 56982,
    fechanac: '15/01/2001'},

    {No: 19141171,
      RFC: '',
      Nombre_completo: 'JESUS FERNANDO',
      Apellido_paterno: 'MIRANDA',
      Apellido_materno: 'TREJO',
      Sexo: 'masculino',
      Salario: 52478,
      fechanac: '16/03/2000'},

      {No: 19141144,
        RFC: '',
        Nombre_completo: 'LUZ ZAYETZY',
        Apellido_paterno: 'GARAY',
        Apellido_materno: 'QUINTERO',
        Sexo: 'femenino',
        Salario: 52014,
        fechanac: '31/12/2001'},

        {No: 19141187,
          RFC: '',
          Nombre_completo: 'CHRISTIAN JOSUE',
          Apellido_paterno: 'RAMIREZ',
          Apellido_materno: 'MARTINEZ',
          Sexo: 'masculino',
          Salario: 42105,
          fechanac: '06/01/2001'},

          {No: 19141180,
            RFC: '',
            Nombre_completo: 'MAURICIO',
            Apellido_paterno: 'ORTEGA',
            Apellido_materno: 'MALAGON',
            Sexo: 'masculino',
            Salario: 42305,
            fechanac: '03/09/2001'},

            {No: 20140151,
              RFC: '',
              Nombre_completo: 'EDGAR ELIAS',
              Apellido_paterno: 'GOMEZ',
              Apellido_materno: 'VARGAS',
              Sexo: 'masculino',
              Salario: 52305,
              fechanac: '05/02/2001'},

              {No: 19141154,
                RFC: '',
                Nombre_completo: 'ISAAC',
                Apellido_paterno: 'HERNANDEZ',
                Apellido_materno: 'RESENDIZ',
                Sexo: 'masculino',
                Salario: 10000,
                fechanac: '08/05/2001'},
                
                {No: 19141170,
                  RFC: '',
                  Nombre_completo: 'EMMANUEL ABIF',
                  Apellido_paterno: 'MEJIA ',
                  Apellido_materno: 'OCHOA',
                  Sexo: 'masculino',
                  Salario: 21000,
                  fechanac: '06/02/1995'},

                  {No: 19140340,
                    RFC: '',
                    Nombre_completo: 'MONICA VALERIA',
                    Apellido_paterno: 'NIEVES ',
                    Apellido_materno: 'TREJO',
                    Sexo: 'femenino',
                    Salario: 30000,
                    fechanac: '06/02/1995'},

                    {No: 19141129,
                      RFC: '',
                      Nombre_completo: 'YAZMIN ALEJANDRA',
                      Apellido_paterno: 'CASTILLO ',
                      Apellido_materno: 'MARTINEZ',
                      Sexo: 'femenino',
                      Salario: 25000,
                      fechanac: '10/02/2001'},

                      {No: 19141143,
                        RFC: '',
                        Nombre_completo: 'PAOLA VALERIA',
                        Apellido_paterno: 'FUERTES ',
                        Apellido_materno: 'GOMEZ',
                        Sexo: 'femenino',
                        Salario: 60000,
                        fechanac: '09/03/2001'},

                        {No: 19141169,
                          RFC: '',
                          Nombre_completo: 'JESSICA MARIANA',
                          Apellido_paterno: 'MARTINEZ ',
                          Apellido_materno: 'CORONILLA',
                          Sexo: 'femenino',
                          Salario: 25000,
                          fechanac: '25/10/2000'},

                          {No: 19140325,
                            RFC: '',
                            Nombre_completo: 'FROYLAN',
                            Apellido_paterno: 'GALVAN ',
                            Apellido_materno: 'TELLEZ',
                            Sexo: 'masculino',
                            Salario: 80000,
                            fechanac: '23/06/2000'},

                            {No: 19141136,
                              RFC: '',
                              Nombre_completo: 'CESAR ADAN',
                              Apellido_paterno: 'CUEVAS ',
                              Apellido_materno: 'TELLEZ',
                              Sexo: 'masculino',
                              Salario: 30000,
                              fechanac: '15/01/2001'},

                              {No: 19141161,
                                RFC: '',
                                Nombre_completo: 'DANIEL ',
                                Apellido_paterno: 'JIMENEZ ',
                                Apellido_materno: 'GALVAN',
                                Sexo: 'masculino',
                                Salario: 10000,
                                fechanac: '02/11/2000'},

                                {No: 18141044,
                                  RFC: '',
                                  Nombre_completo: 'PAOLA GUADALUPE ',
                                  Apellido_paterno: 'SANCHEZ ',
                                  Apellido_materno: 'MEDINA',
                                  Sexo: 'femenino',
                                  Salario: 85000,
                                  fechanac: '11/02/1998'},

                                  {No: 19140319,
                                    RFC: '',
                                    Nombre_completo: 'MARIA GUADALUPE ',
                                    Apellido_paterno: 'SILVA ',
                                    Apellido_materno: 'RESENDIZ',
                                    Sexo: 'femenino',
                                    Salario: 30000,
                                    fechanac: '15/12/1999'},

                                    {No: 19141132,
                                      RFC: '',
                                      Nombre_completo: 'JESUS  ',
                                      Apellido_paterno: 'CHAVEZ ',
                                      Apellido_materno: 'ARIAS',
                                      Sexo: 'masculino',
                                      Salario: 52879,
                                      fechanac: '24/03/2001'},

                                      {No: 19141186,
                                        RFC: '',
                                        Nombre_completo: 'OSVALDO  ',
                                        Apellido_paterno: 'PEREZ ',
                                        Apellido_materno: 'OCHOA',
                                        Sexo: 'masculino',
                                        Salario: 52800,
                                        fechanac: '31/12/2000'},

                                        {No: 19141198,
                                          RFC: '',
                                          Nombre_completo: 'JUAN PABLO',
                                          Apellido_paterno: 'SANCHEZ',
                                          Apellido_materno: 'PEREZ',
                                          Sexo: 'masculino',
                                          Salario: 20000,
                                          fechanac: '10/02/2001'},

                                          {No: 19141129,
                                            RFC: '',
                                            Nombre_completo: 'ITZEL GUADALUPE',
                                            Apellido_paterno: 'ANDRADE',
                                            Apellido_materno: 'GUTIERREZZ',
                                            Sexo: 'femenino',
                                            Salario: 10000,
                                            fechanac: '10/02/2001'},

                                            {No: 19141127,
                                              RFC: '',
                                              Nombre_completo: 'SERGIO LEONARDO',
                                              Apellido_paterno: 'CAMPOS',
                                              Apellido_materno: 'RANGEL',
                                              Sexo: 'masculino',
                                              Salario: 20000,
                                              fechanac: '10/02/2001'},

                                              {No: 19140340,
                                                RFC: '',
                                                Nombre_completo: 'MONICA VALERIA',
                                                Apellido_paterno: 'NIEVES',
                                                Apellido_materno: 'TREJO',
                                                Sexo: 'femenino',
                                                Salario: 30000,
                                                fechanac: '10/02/2001'},

                                                {No: 19141243,
                                                  RFC: '',
                                                  Nombre_completo: 'DALIA ELIZABETH',
                                                  Apellido_paterno: 'GARCIA',
                                                  Apellido_materno: 'SANCHEZ',
                                                  Sexo: 'femenino',
                                                  Salario: 10000,
                                                  fechanac: '15/12/1999'},

                                                  {No: 19141245,
                                                    RFC: '',
                                                    Nombre_completo: 'MARCO ULYSES',
                                                    Apellido_paterno: 'MORA',
                                                    Apellido_materno: 'DURAN',
                                                    Sexo: 'masculino',
                                                    Salario: 15000,
                                                    fechanac: '15/12/1999'},

                                                    {No: 19141172,
                                                      RFC: '',
                                                      Nombre_completo: 'EDUARDO',
                                                      Apellido_paterno: 'MORALES',
                                                      Apellido_materno: 'FLORES',
                                                      Sexo: 'masculino',
                                                      Salario: 35000,
                                                      fechanac: '24/02/2001'},

                                                      {No: 19141139,
                                                        RFC: '',
                                                        Nombre_completo: 'DAVID',
                                                        Apellido_paterno: 'MORENO',
                                                        Apellido_materno: 'MARTINEZ',
                                                        Sexo: 'masculino',
                                                        Salario: 40000,
                                                        fechanac: '15/12/1999'},

                                                        {No: 19141217,
                                                          RFC: '',
                                                          Nombre_completo: 'LUIS ENRIQUE',
                                                          Apellido_paterno: 'ZARATE',
                                                          Apellido_materno: 'CONTRERAS',
                                                          Sexo: 'masculino',
                                                          Salario: 40000,
                                                          fechanac: '09/06/2001'},

                                                          {No: 19140297,
                                                            RFC: '',
                                                            Nombre_completo: 'VERONICA ',
                                                            Apellido_paterno: 'RESENDIZ',
                                                            Apellido_materno: 'CASTRO',
                                                            Sexo: 'femenino',
                                                            Salario: 45000,
                                                            fechanac: '09/06/2001'},

                                                            {No: 17141738,
                                                              RFC: '',
                                                              Nombre_completo: 'DANIEL ALEJANDRO ',
                                                              Apellido_paterno: 'ROSALES',
                                                              Apellido_materno: 'ESPINOSA',
                                                              Sexo: 'masculino',
                                                              Salario: 12045,
                                                              fechanac: '09/06/2001'},

                                                              {No: 18141051,
                                                                RFC: '',
                                                                Nombre_completo: 'KEVIN YAEL ',
                                                                Apellido_paterno: 'RUIZ',
                                                                Apellido_materno: 'SANDOVAL',
                                                                Sexo: 'masculino',
                                                                Salario: 23045,
                                                                fechanac: '09/06/2001'},

                                                                {No: 19141215,
                                                                  RFC: '',
                                                                  Nombre_completo: 'SERGIO ALEJANDRO ',
                                                                  Apellido_paterno: 'VILLEGAS',
                                                                  Apellido_materno: 'FERRUZCA',
                                                                  Sexo: 'masculino',
                                                                  Salario: 43045,
                                                                  fechanac: '09/06/2001'},




  ]

  constructor() { }

  ngOnInit(): void { }

  llamar(event: string){
    this.radioBottonSeleccionado=event;
  }


  obtenerTotalEmpleados(sex: string): number {
    if (sex == 'masculino') {
      return this.listEmpleados.filter(list => list.Sexo === 'masculino').length
    }

    if (sex == 'femenino') {
      return this.listEmpleados.filter(list => list.Sexo === 'femenino').length
    }

    return this.listEmpleados.length;
  }

  radioBottonSeleccionado: string = 'empleados'; //Para que selecciones todos al inicio
  genero: any = [
    'masculino',
    'femenino',
    'empleados'
  ];
  radioChangeHandler(event: any) {
    //this.genero = event.target.value;
    this.radioBottonSeleccionado = event.target.value;
  }


  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.Sexo === 'femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.Sexo === 'masculino').length;
  }

  generarRFC(empleado: Empleado): string {
    const rfc = this.instancerfc.calcularrfc(empleado.Nombre_completo,empleado.Apellido_paterno,
      empleado.Apellido_materno,empleado.fechanac);
      empleado.RFC = rfc;
      return rfc;
    
  }

  getRFC(empleado: Empleado): string {
    if (empleado.RFC == '') {
      const rfc = this.generarRFC(empleado);
      return rfc.toString();
    } else {
      return empleado.RFC;
    }
  }

  totalEmpleados: number = this.listEmpleados.length;
  empleadosFem: number = this.listEmpleados.filter(list => list.Sexo == 'femenino').length;
  empleadosMas: number = this.listEmpleados.filter(list => list.Sexo == 'masculino').length;

  
  /*
  obtenerTotalEmpleados(sex: string): number {
    if(sex=='masculino'){
      return this.listEmpleados.filter(list => list.Sexo=== 'masculino').length
    }
  
    if(sex=='femenino'){
      return this.listEmpleados.filter(list => list.Sexo=== 'femenino').length
    }
  
    return this.listEmpleados.length;
  }
  
  radioBottonSeleccionado: string = 'empleados'; //Para que selecciones todos al inicio
  genero: any = [
    'masculino',
    'femenino',
    'empleados'
  ];
  radioChangeHandler(event: any){
    this.genero=event.target.value;
  }
  
  
  
  
  
  
  
   */

  /* 
  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.Sexo === 'femenino').length;
  }
  
  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.Sexo === 'masculino').length;
  }
  */

}
