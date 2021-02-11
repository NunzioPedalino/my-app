import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-listpark',
  templateUrl: './listpark.component.html',
  styleUrls: ['./listpark.component.css']
})
export class ListparkComponent implements OnInit {

  toppings = new FormControl();
  
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
