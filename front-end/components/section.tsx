import React from "react";

export interface ISection {
  dir?: "vertical" | "horizontal";
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Section = ({ title, children, dir = "vertical" }: ISection) => {
  return (
    <section
      className={`${dir === "vertical" ? "flex-col" : "sm:flex-row flex-col sm:gap-16"} flex justify-center my-16 items-center gap-4`}
    >
      {title}
      <div>{children}</div>
    </section>
  );
};
