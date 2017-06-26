import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../shared/model/ProductModel";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  public productModel: ProductModel[] =[];

  constructor() { }

  ngOnInit() {
    this.productModel.push(new ProductModel("Plante verte", 34 ,"http://mosthdwallpapers.com/wp-content/uploads/2016/04/Green-Rose-Full-HD-1080p-Wallpaper.jpg"));
    this.productModel.push(new ProductModel("Plante verte", 34 ,"http://mosthdwallpapers.com/wp-content/uploads/2016/04/Green-Rose-Full-HD-1080p-Wallpaper.jpg"));
  }

}
