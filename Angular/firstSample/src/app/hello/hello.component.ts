import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  isLogged = false;

  values = ['primo', 'secondo', 'terzo'];

  constructor() {}
}
