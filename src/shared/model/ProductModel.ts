export class ProductModel {
  public _price: number;
  public _name: string;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;

  }
}
