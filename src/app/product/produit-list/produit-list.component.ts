import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../shared/model/ProductModel";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  public productModel: ProductModel;

  constructor() { }

  ngOnInit() {
    this.productModel = new ProductModel("LOL", 34);
    console.log(this.productModel._name + " || " + this.productModel._price);
  }

}
