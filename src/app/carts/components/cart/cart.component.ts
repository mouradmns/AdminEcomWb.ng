import { Component, OnInit } from '@angular/core';
import {CartsService} from "../../services/carts.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor( private service:CartsService) {}
  carts:any[]= []
  ngOnInit(): void {
    this.getAllCarts()
  }

getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts=res;
     console.log(this.carts)
    });
  }

}
