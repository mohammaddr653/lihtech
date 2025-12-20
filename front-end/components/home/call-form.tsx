"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { AlertCircle } from "lucide-react";
import { addToast } from "@heroui/toast";
import { useCreateOrder } from "@/hooks/use-create-order";

const toPersianDigits = (value: string) =>
  value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const toEnglishDigits = (value: string) =>
  value.replace(/[۰-۹]/g, (d) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);

export const CallForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const { mutate, isPending } = useCreateOrder();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {
        name,
        phone,
        note,
      },
      {
        onSuccess: () => {
          setName("");
          setPhone("");
          setNote("");

          addToast({
            title: "درخواست شما با موفقیت ثبت شد",
            description: "ما در اسرع وقت با شما تماس خواهیم گرفت",
          });
        },
        onError: () => {
          addToast({ title: "خطا در ثبت درخواست، لطفاً دوباره تلاش کنید" });
        },
      }
    );
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-2 rounded-3xl border border-border bg-gray4 p-3 shadow-2xl"
    >
      <section className="flex gap-2">
        <Input
          label="نام و نام خانوادگی"
          radius="full"
          required
          value={name}
          onValueChange={setName}
        />

        <Input
          label="شماره تماس"
          radius="full"
          required
          inputMode="numeric"
          value={toPersianDigits(phone)}
          onValueChange={(value) => {
            const normalized = toEnglishDigits(value).replace(/\D/g, "");
            setPhone(normalized);
          }}
          pattern="[۰-۹0-9]*"
        />
      </section>

      <Textarea
        label="درخواست شما"
        radius="full"
        required
        value={note}
        onValueChange={setNote}
      />

      <Button
        type="submit"
        color="primary"
        radius="full"
        isLoading={isPending}
        className="mt-2"
      >
        ثبت درخواست
      </Button>

      <p className="flex items-center gap-2 text-sm text-gray">
        <AlertCircle size={18} />
        همه فیلدها اجباری هستند
      </p>
    </form>
  );
};
