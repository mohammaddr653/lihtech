import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/api/order";
import { CreateOrderPayload } from "@/types/order";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => createOrder(payload),
  });
};
