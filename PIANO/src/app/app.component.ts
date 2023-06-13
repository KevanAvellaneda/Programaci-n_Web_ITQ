import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIANO';
  aplicarSonido(numero: number):void
  {
    let audio = new Audio();
    switch (numero) {
      case 1:
        audio.src='../assets/sonidos/do-80236.mp3';
        audio.load();
        audio.play();
        break;
      case 2:
        audio.src='../assets/sonidos/re-78500.mp3';
        audio.load();
        audio.play();
        break;
      case 3:
        audio.src='../assets/sonidos/mi-80239.mp3';
        audio.load();
        audio.play();
        break;
      case 4:
        audio.src='../assets/sonidos/fa-78409.mp3';
        audio.load();
        audio.play();
        break;
      case 5:
        audio.src='../assets/sonidos/sol-101774.mp3';
        audio.load();
        audio.play();
        break;
      case 6:
        audio.src='../assets/sonidos/la-80237.mp3';
        audio.load();
        audio.play();
        break;
      case 7:
        audio.src='../assets/sonidos/si-80238.mp3';
        audio.load();
        audio.play();
        break;
    }
  }
}
