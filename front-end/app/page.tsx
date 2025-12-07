import { HeroInput } from "@/components/home/hero-app";
import { Section } from "@/components/section";
import { Title } from "@/components/title/title";
import { Component } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Section
        title={
          <Title
            upTitle={{ icon: <Component />, content: "لورم ایپسوم" }}
            mainText={{ type: "super", children: "لورم ایپسوم متن ساختگی" }}
            description={{
              text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.`,
            }}
          />
        }
        children={<HeroInput />}
      />
    </section>
  );
}
