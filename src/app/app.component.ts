import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  name = 'david castro';
  edad = 54;
  img = 'https://fondosmil.com/fondo/55687.jpg';
  btnDisabled: boolean = true;

  btnSendEnable() {
    this.btnDisabled = !this.btnDisabled;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
}
