export interface CreateOrderPayload {
  name: string;
  phone: string;
  note: string;
}

export interface CreateOrderResponse {
  status: "success";
}
