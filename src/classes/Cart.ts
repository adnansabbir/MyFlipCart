import { Item } from "./Item";
import { IProduct } from "../interfaces/IProduct";

export class Cart {
  private _items: Item[];

  public constructor() {
    this._items = new Array<Item>();
  }

  get items(): Item[] {
    return this._items.filter((item) => item.quantity > 0);
  }

  public addProduct(product: IProduct): void {
    const item = this.items.find((item) => item.product === product);
    if (item) {
      item.increaseQuantity();
    } else {
      this._items.push(new Item(product, 1));
    }
  }
}
