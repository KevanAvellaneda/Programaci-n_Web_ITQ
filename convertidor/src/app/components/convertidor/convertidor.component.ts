import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {
  cantidad: number=0;
  tengo: string = "USD";
  quiero: string ="EUR";
  total: number = 0;
  //arreglo para usarlo en el maquetado
  monedas: string[] = ['USD', 'EUR', 'LIBRA', 'PESOS MXN', 'Yuan chino', 'Franco suizo', 'Yen japon', 'Dolar canadiense', 'Rublo ruso', 'Real brasileño'];
  constructor()
  {

  }
  ngOnInit(): void{

  }
  convertir(): void 
  {
    switch(this.tengo)
    {
      case 'USD':
        //investigar la equivalencia de cada moneda
        if(this.quiero=='USD')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.84;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.75;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 18.66;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 6.89;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.92;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 134.56;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 1.37;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 75.41;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 5.25;
        }
        break;
      case 'EUR':
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 1.07;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.88;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 20.03;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 7.40;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.98;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 144.47;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 1.47;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 81.00;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 5.64;
        }
        break;
      case 'LIBRA':
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 1.22;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 1.13;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 22.68;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 8.38;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 1.11;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 163.57;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 1.66;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 91.60;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 6.38;
        }
        break;
      case 'PESOS MXN':
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.054;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.050;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.044;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 0.37;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.049;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 7.21;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 0.073;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 4.05;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 0.28;
        }
        break;
      case 'Yuan chino':
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.15;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.12;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 2.71;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.13;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 19.54;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 0.20;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 10.94;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 0.76;
        }
        break;
      case 'Franco suizo':
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 1.09;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 1.02;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.90;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 20.40;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 7.53;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 147.19;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 1.50;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 82.43;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 5.74;
        }
        break;
      case 'Yen japon':
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.0074;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.0069;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.0061;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 0.14;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 0.051;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.0068;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 0.010;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 0.56;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 0.039;
        }
        break;
      case 'Dolar canadiense':
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.73;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.68;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.60;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 13.65;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 5.03;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.67;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 98.39;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 55.09;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 3.84;
        }
        break;
      case 'Rublo ruso':
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.013;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.012;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.011;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 0.25;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 0.091;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 0.012;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 1.79;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 0.018;
        }
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad * 0.070;
        }
        break;
      case 'Real brasileño':
        if(this.quiero=='Real brasileño')
        {
          this.total=this.cantidad;
        }
        if(this.quiero=='USD')
        {
          this.total=this.cantidad * 0.19;
        }
        if(this.quiero=='EUR')
        {
          this.total=this.cantidad * 0.18;
        }
        if(this.quiero=='LIBRA')
        {
          this.total=this.cantidad * 0.16;
        }
        if(this.quiero=='PESOS MXN')
        {
          this.total=this.cantidad * 3.55;
        }
        if(this.quiero=='Yuan chino')
        {
          this.total=this.cantidad * 1.31;
        }
        if(this.quiero=='Franco suizo')
        {
          this.total=this.cantidad * 5.74;
        }
        if(this.quiero=='Yen japon')
        {
          this.total=this.cantidad * 25.64;
        }
        if(this.quiero=='Dolar canadiense')
        {
          this.total=this.cantidad * 0.26;
        }
        if(this.quiero=='Rublo ruso')
        {
          this.total=this.cantidad * 14.35;
        }
        break;
    }
  }
}
