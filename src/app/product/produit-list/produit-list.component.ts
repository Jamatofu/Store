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
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
    this.productModel.push(new ProductModel("Rose", 21.99 ,"http://www.visoflora.com/images/original/allons-voir-si-la-rose-est-eclose-visoflora-76986.jpg"));
  }

}
