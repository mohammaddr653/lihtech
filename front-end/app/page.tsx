import { HeroInput } from "@/components/home/hero-app";
import { Section } from "@/components/section";
import { Title } from "@/components/title/title";
import { GlowingCard } from "@/components/ui/card/glowing-card";
import { ServiceCard } from "@/components/ui/card/service-card";
import { ourServices } from "@/config/home/our-services";
import {
  BriefcaseBusiness,
  Component,
  FileSearchCorner,
  Hexagon,
  HomeIcon,
  UsersRound,
} from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Hero section */}
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

      {/* Who is we ? */}
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
        children={
          <GlowingCard
            icon={
              <FileSearchCorner strokeWidth={0.5} size={150} color="#526859" />
            }
          />
        }
      />

      <Section
        title={
          <Title
            upTitle={{ icon: <BriefcaseBusiness />, content: "خدمات ما" }}
            mainText={{
              children: "ما چه کارهایی انجام میدهیم ؟",
              type: "normal",
            }}
          />
        }
        children={
          <ul className="flex gap-4 mt-8">
            {ourServices.map((os, i) => (
              <ServiceCard key={i} {...os} />
            ))}
          </ul>
        }
      />
    </section>
  );
}
