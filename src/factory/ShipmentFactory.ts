import { IShipment } from "../interfaces/IShipment";
import { ShipmentTypes } from "../const/ShipmentTypes.enum";
import { RegularVirtualShipment } from "../classes/shipment/RegularVirtualShipment";
import { RegularPhysicalShipment } from "../classes/shipment/RegularPhysicalShipment";

export abstract class ShipmentFactory {
  protected constructor() {}

  static createShipment(type: ShipmentTypes, name: string): IShipment {
    switch (type) {
      case ShipmentTypes.REGULAR_VIRTUAL:
        return new RegularVirtualShipment(name, 24);
      default:
        return new RegularPhysicalShipment(name, 48);
    }
  }
}
