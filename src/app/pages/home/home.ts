import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../shared/modal/cart/cart.service';

interface Item {
  id: string;
  name: string;
  price: number;
  amount: number;
}

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  items = signal<Item[]>([
    { id: '1', name: 'Football', price: 25, amount: 1 },
    { id: '2', name: 'Basketball', price: 30, amount: 1 },
    { id: '3', name: 'Tennis Racket', price: 50, amount: 1 },
  ]);

  constructor(public chartService: CartService){};

  addItem(item: Item){
    this.chartService.addItem(item);
  }
}
