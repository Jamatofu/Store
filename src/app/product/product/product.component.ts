import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../shared/model/ProductModel";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productModel: ProductModel;

  constructor() {
  }

  ngOnInit() {
  }

}
