import { IShipment } from "./IShipment";
import { ICategory } from "./ICategory";
import { Catalogue } from "../classes/Catalogue";

export abstract class IProduct {
  private _name: string;
  private _quantity: number;
  private _category: ICategory;
  private _catalogue: Catalogue | undefined;
  private _availableShipmentType: IShipment[];

  constructor(
    name: string,
    quantity: number,
    category: ICategory,
    availableShipmentType: IShipment[]
  ) {
    this._name = name;
    this._quantity = quantity;
    this._category = category;
    this._availableShipmentType = availableShipmentType;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get category(): ICategory {
    return this._category;
  }

  set category(value: ICategory) {
    this._category = value;
  }

  get availableShipmentType(): IShipment[] {
    return this._availableShipmentType;
  }

  set availableShipmentType(value: IShipment[]) {
    this._availableShipmentType = value;
  }

  get catalogue(): Catalogue | undefined {
    return this._catalogue;
  }

  set catalogue(value: Catalogue | undefined) {
    this._catalogue = value;
  }
}
