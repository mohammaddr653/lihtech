import React from "react";
import { DottedGlowBackground } from "../dotted-glow-background";

export const GlowingCard = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="relative -top-12 -z-10 backdrop-blur-3xl flex size-60 items-end justify-end overflow-hidden rounded-4xl border border-border px-4 shadow shadow-black/10 ring-black/5 md:size-100 dark:shadow-white/10 dark:ring-white/5">
      <div className="absolute z-50 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="p-4 rounded-full z-50">{icon}</span>
      </div>
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};
