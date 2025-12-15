import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Bot, FolderKanban, Sparkles } from "lucide-react";

export const HeroInput = () => {
  return (
    <div className="bg-gray4 flex justify-between items-center gap-2 sm:w-[30rem] w-full p-1 border border-border shadow-2xl rounded-full opacity-90">
      <div className="flex gap-2 w-full">
        <span className="border border-border p-3 rounded-full">
          <FolderKanban />
        </span>
        <input
          type="text"
          className="outline-none w-full"
          placeholder="مسئله یا نیاز داده‌ای کسب‌وکار خود را بنویسید"
        />
      </div>
      <Button size="lg" color="primary" radius="full" variant="shadow">
        شروع تحلیل
      </Button>
    </div>
  );
};
