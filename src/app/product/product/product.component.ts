import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../shared/model/ProductModel";
import {PanierService} from "../../../shared/service/panier/panier.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productModel: ProductModel;

  constructor(private panierService: PanierService) {
  }

  ngOnInit() {
  }

  public addToShop(quantity: number) {
    if(quantity > 0) {
      let toAdd = this.productModel._price * quantity;
      console.log(toAdd);
      this.panierService.addAccount(toAdd);
    }
  }
}
