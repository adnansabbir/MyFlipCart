import { ProductTypes } from "../const/ProductTypes.enum";
import { IProduct } from "../interfaces/IProduct";
import { IShipment } from "../interfaces/IShipment";
import { VirtualProduct } from "../classes/product/VirtualProduct";
import { PhysicalProduct } from "../classes/product/PhysicalProduct";
import { ICategory } from "../interfaces/ICategory";

export class ProductFactory {
  protected constructor() {}

  static createProduct(
    type: ProductTypes,
    name: string,
    quantity: number,
    shipmentTypes: IShipment[],
    category: ICategory
  ): IProduct {
    switch (type) {
      case ProductTypes.VIRTUAL:
        return new VirtualProduct(name, quantity, category, shipmentTypes);
      default:
        return new PhysicalProduct(name, quantity, category, shipmentTypes);
    }
  }
}
