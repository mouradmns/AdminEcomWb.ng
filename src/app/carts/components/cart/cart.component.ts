import { Component, OnInit } from '@angular/core';
import {CartsService} from "../../services/carts.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor( private service:CartsService,private build:FormBuilder) {}
  carts:any[]= []
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.build.group({
      start:[''],
      end:['']
    })

    this.getAllCarts()
  }

getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts=res;
    });
  }

  applyFilter() {
    let date=this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts=res;
       console.log(this.carts)
    })
  }

  deleteCart(id:number) {
  this.service.deleteCart(id).subscribe((res:any) => {
     this.getAllCarts()
    alert( "cart Deleted Success")
  })
  }
}
