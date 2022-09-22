import { IUser } from "../../interfaces/IUser";
import { Catalogue } from "../Catalogue";

export class Seller extends IUser {
  private readonly _catalogue: Catalogue;

  constructor(name: string, phone: string, catalogueName: string) {
    super(name, phone);
    this._catalogue = new Catalogue(catalogueName);
  }

  get catalogue(): Catalogue {
    return this._catalogue;
  }
}
