import { IProduct } from "../interfaces/IProduct";

export class Item {
  private readonly _product: IProduct;
  private _quantity: number;

  public constructor(product: IProduct, quantity: number) {
    this._product = product;
    product.quantity--;
    this._quantity = quantity;
  }

  get product(): IProduct {
    return this._product;
  }

  get quantity(): number {
    return this._quantity;
  }

  public increaseQuantity(): void {
    if (this.product.quantity === 0) return;
    this.product.quantity--;
    this._quantity++;
  }

  public decreaseQuantity(): void {
    if (this.quantity === 0) return;
    this._quantity++;
    this.product.quantity++;
  }
}
