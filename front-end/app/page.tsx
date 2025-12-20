import { CallForm } from "@/components/home/call-form";
import { HeroInput } from "@/components/home/hero-app";
import { Section } from "@/components/section";
import { Title } from "@/components/title/title";
import { AdvantageCard } from "@/components/ui/card/advantage-card";
import { GlowingCard } from "@/components/ui/card/glowing-card";
import { ServiceCard } from "@/components/ui/card/service-card";
import { ourAdvantage } from "@/config/home/our-advantage";
import { ourServices } from "@/config/home/our-services";
import {
  BriefcaseBusiness,
  CircleQuestionMark,
  Component,
  FileSearchCorner,
  Hexagon,
  HomeIcon,
  PhoneCall,
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

      {/* Our services */}
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
          <ul className="flex flex-col sm:flex-row gap-4 mt-8">
            {ourServices.map((os, i) => (
              <ServiceCard key={i} {...os} />
            ))}
          </ul>
        }
      />

      {/* Why us ? */}
      <Section
        dir="horizontal"
        title={
          <Title
            upTitle={{
              icon: <CircleQuestionMark />,
              content: "چرا ما؟",
            }}
            mainText={{
              type: "normal",
              children: "دلایلی که باید مارو انتخاب کنید",
            }}
            description={{ text: "تفاوت ما در نگاه تحلیلی است" }}
          />
        }
        children={
          <ul className="flex flex-col gap-4 mt-8">
            {ourAdvantage.map((oa, i) => (
              <AdvantageCard key={i} {...oa} />
            ))}
          </ul>
        }
      />

      {/* Call */}
      <Section
        title={
          <Title
            upTitle={{
              icon: <PhoneCall />,
              content: "دریافت مشاوره یا ثبت سفارش",
            }}
            mainText={{
              type: "normal",
              children: "داده دارید، اما دید ندارید؟",
            }}
            description={{
              text: "ما کمک می‌کنیم داده‌هایتان به تصمیم‌های دقیق و قابل اجرا تبدیل شوند.",
            }}
          />
        }
        children={<CallForm />}
      />
    </section>
  );
}
