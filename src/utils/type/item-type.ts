export type NewItemDataType = {
  isTopping: boolean;
  name: string;
  price: string;
  store: string;
};

export type ItemDataType = {
  _id: string;
} & NewItemDataType;
