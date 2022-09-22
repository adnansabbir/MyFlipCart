export abstract class IShipment {
  private readonly _name: string;
  private _estimatedDeliveryHoursRequired: number;

  public constructor(name: string, estimatedDeliveryHoursRequired: number) {
    this._name = name;
    this._estimatedDeliveryHoursRequired = estimatedDeliveryHoursRequired;
  }

  get name(): string {
    return this._name;
  }

  get estimatedDeliveryHoursRequired(): number {
    return this._estimatedDeliveryHoursRequired;
  }

  set estimatedDeliveryHoursRequired(value: number) {
    this._estimatedDeliveryHoursRequired = value;
  }
}
