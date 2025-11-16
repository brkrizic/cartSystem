import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-cart',
  imports: [NgFor, NgIf],
  templateUrl: '/cart.html',
  styleUrls: ['/cart.css'],
  standalone: true
})
export class Chart {
    constructor(public chartService: CartService){}
}
