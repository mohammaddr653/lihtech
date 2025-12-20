import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { AlertCircle } from "lucide-react";
import { NumberInput } from "@heroui/number-input";

export const CallForm = () => {
  return (
    <form className="flex flex-col shadow-2xl gap-2 bg-gray4 p-2 rounded-3xl border border-border">
      <section className="flex gap-2">
        <Input radius="full" placeholder="نام و نام خانوادگی" />{" "}
        <NumberInput hideStepper placeholder="شماره تماس" radius="full" />
      </section>
      <section>
        <Textarea radius="full" placeholder="درخواست شما" />
      </section>
      <Button color="primary" className="mt-2" radius="full">
        ثبت درخواست
      </Button>
      <p className="flex gap-2 mt-1 text-sm items-center text-gray">
        <AlertCircle size={20} />
        همه فیلد ها اجباری هستند
      </p>
    </form>
  );
};
