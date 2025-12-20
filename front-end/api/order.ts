import axios from "axios";
import { CreateOrderPayload, CreateOrderResponse } from "@/types/order";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const createOrder = async (
  payload: CreateOrderPayload
): Promise<CreateOrderResponse> => {
  const { data } = await api.post("/orders", payload);
  return data;
};
