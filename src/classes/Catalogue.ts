import { IProduct } from "../interfaces/IProduct";

export class Catalogue {
  private _name: string;
  private _products: IProduct[];

  public constructor(name: string) {
    this._name = name;
    this._products = new Array<IProduct>();
  }

  get products(): IProduct[] {
    return this._products;
  }

  public addProduct(product: IProduct): void {
    this._products.push(product);
    product.catalogue = this;
  }
}
