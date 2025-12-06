import { TwitterIcon } from "@/components/icons";
import { Title } from "@/components/title/title";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Title
        upTitle={{ icon: <TwitterIcon />, content: "لورم ایپسوم" }}
        mainText={{ type: "super", children: "لورم ایپسوم متن ساختگی" }}
        description={{ text: " این یک توضیحات است" }}
      />
    </section>
  );
}
