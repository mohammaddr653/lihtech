import { BGPattern } from "@/components/bg-pattern";
import React from "react";
import { Ripple } from "../ripple";

export interface IServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: IServiceCard) => {
  return (
    <li className="relative -top-12 gap-8 -z-10 backdrop-blur-3xl flex flex-col items-center size-60 justify-center overflow-hidden rounded-4xl border border-border px-4 shadow shadow-black/10 ring-black/5 md:size-100 dark:shadow-white/10 dark:ring-white/5">
      <BGPattern variant="dots" mask="fade-bottom" />
      <header className="flex flex-col justify-center items-center">
        <Ripple size={64} numCircles={4}>
          <span className="text-primary">{icon}</span>
        </Ripple>
      </header>
      <main className="text-center flex flex-col gap-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray">{description}</p>
      </main>
    </li>
  );
};
