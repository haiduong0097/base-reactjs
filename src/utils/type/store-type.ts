export type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type NewStoreDataType = {
  description: string;
  storeAddress: string;
  storeCode: string;
  storeImageUrl: string;
  storeName: string;
  storePhoneNumber: string;
  storeTypeBill: string;
};

export type StoreDataType = {
  _id: string;
} & NewStoreDataType;
