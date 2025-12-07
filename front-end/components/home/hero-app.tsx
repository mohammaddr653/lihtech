import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Bot, Sparkles } from "lucide-react";

export const HeroInput = () => {
  return (
    <div className="bg-gray4 flex justify-between items-center gap-2 w-full p-1 border border-border shadow-2xl rounded-full opacity-90">
      <div className="flex gap-2 w-full">
        <span className="border border-border p-3 rounded-full">
          <Bot />
        </span>
        <input
          type="text"
          className="outline-none w-full"
          placeholder="اولین چت بات خود را ایجاد کنید"
        />
      </div>
      <Button size="lg" color="primary" radius="full" variant="shadow">
        ایجاد برنامه
      </Button>
    </div>
  );
};
