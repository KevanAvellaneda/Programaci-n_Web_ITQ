import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent {
 @Output() obtsexo = new EventEmitter<string>();
 @Input() empFem: number = 0;
 @Input() empMas: number = 0;
 @Input() totalEmp: number = 0;
 cosa: number=0;

 constructor(){

 }

 ngOnInit(radioBotton: string): void {
  this.obtsexo.emit(this.radioBotton);
 }

 radioBotton: string = '';
  opciones: any = [
    'masculino',
    'femenino',
    'empleados'
  ];

  radioChangeHandler (event: any){
    this.radioBotton = event.target.value;
    this.ngOnInit(this.radioBotton);
  }

  llamar(sex: string): number {
    if(sex == 'femenino'){
      return this.empFem;
    }
    if(sex == 'masculino'){
      return this.empMas;
    }
    return this.totalEmp;
  }
}
