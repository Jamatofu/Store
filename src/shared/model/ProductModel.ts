export class ProductModel {
  public _price: number;
  public _name: string;
  public _urlImage: string;

  constructor(name: string, price: number, urlImage: string) {
    this._name = name;
    this._price = price;
    this._urlImage = urlImage;
  }
}
