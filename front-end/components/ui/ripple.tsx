import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  size?: number;
  numCircles?: number;
  opacity?: number;
}

export const Ripple = React.memo(function Ripple({
  size = 64,
  numCircles = 4,
  opacity = 0.25,
  className,
  children,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center pointer-events-none",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* circles */}
      {Array.from({ length: numCircles }, (_, i) => {
        const circleSize = size + i * 16;

        return (
          <div
            key={i}
            className="absolute bg-border rounded-full border"
            style={
              {
                width: circleSize,
                height: circleSize,
                opacity: opacity - i * 0.04,
                borderWidth: "2px",
                borderColor: "var(--color-green-deep)",
              } as CSSProperties
            }
          />
        );
      })}

      {/* icon */}
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  );
});

Ripple.displayName = "Ripple";
