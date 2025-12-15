import { HeroInput } from "@/components/home/hero-app";
import { Section } from "@/components/section";
import { Title } from "@/components/title/title";
import { Component, UsersRound } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Section
        title={
          <Title
            upTitle={{ icon: <Component />, content: "و اما شروع داستان" }}
            mainText={{
              type: "super",
              children: "جایی که داده به تصمیم تبدیل میشود",
            }}
            description={{
              text: "ما یک آژانس Data-Driven Digital Marketing هستیم که داده‌های پراکنده شما را به بینش قابل اجرا و سیستم‌های ارتباطی هوشمند تبدیل می‌کنیم.",
            }}
          />
        }
        children={<HeroInput />}
      />

      <Section
        title={
          <Title
            upTitle={{ icon: <UsersRound />, content: "ما کی هستیم ؟" }}
            mainText={{
              type: "normal",
              children: "ما فقط اجرا نمی‌کنیم؛ تحلیل می‌کنیم",
            }}
            description={{
              text: `ما یک آژانس تخصصی در حوزه بازاریابی دیجیتال داده‌محور هستیم که تمرکز اصلی‌مان روی تحلیل، یکپارچه‌سازی داده و طراحی سیستم‌های هوشمند تصمیم‌سازی است.
هدف ما این است که مدیران و تیم‌ها، به‌جای حدس زدن، بر اساس داده تصمیم بگیرند و ارتباط با کاربران به‌صورت مقیاس‌پذیر و قابل اندازه‌گیری انجام شود.`,
            }}
          />
        }
        children={`hi`}
      />
    </section>
  );
}
