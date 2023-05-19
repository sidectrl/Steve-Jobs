import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  
  isLogged = true;
  
  counter!:number;
  
  values = [];
  
  users: User[] = [
    {id: '0', name: 'Mario', surname: 'Rossi'},
    {id: '1', name: 'Mario', surname: 'Bianchi'},
  ]
  
  constructor() {}
  
  ngOnInit() {
    console.log('lancio');
    this.counter = 10;
  }

  changeCounter = (type: 'minus' | 'add') => {
    type === 'minus' ? this.counter-- : this.counter++;
  } 

}
