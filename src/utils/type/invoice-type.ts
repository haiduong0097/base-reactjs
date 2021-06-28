export type NewInvoiceDataType = {
  storeId: string;
};

export type InvoiceDataType = {
  _id: string;
} & NewInvoiceDataType;
