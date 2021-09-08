export interface SailingSchedule {
  carrier: CarrierModel;
  comments: string;
  cutOff: string;
  cutOffIMO: string;
  eta: string;
  etd: string;
  hub: CommonObjectModel;
  id: string;
  placeOfReceipt: CommonObjectModel;
  portOfDischarge: CommonObjectModel;
  portOfLoading: CommonObjectModel;
  productType: string;
  transitTimeCutOffToPort: number;
  transitTimePortToPort: number;
  vessel: VesselModel;
  voyageNumber: string;
}

export interface CarrierModel {
  scac: string;
  name: string;
}

export interface CommonObjectModel {
  unCode: string;
  countryCode: string;
  name: string;
  stateName: string;
}

export interface VesselModel {
  name: string;
  imoNumber: string;
}

