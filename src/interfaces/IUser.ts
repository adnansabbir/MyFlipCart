import { Cart } from "../classes/Cart";
import { IProduct } from "./IProduct";

export abstract class IUser {
  private _name: string;
  private _phone: string;
  private cart: Cart;

  public constructor(name: string, phone: string) {
    this._name = name;
    this._phone = phone;
    this.cart = new Cart();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  addProductToCart(product: IProduct): void {
    this.cart.addProduct(product);
  }
}
