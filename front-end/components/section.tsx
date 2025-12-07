import React from "react";

export interface ISection {
  dir?: "vertical" | "horizontal";
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Section = ({ title, children, dir = "vertical" }: ISection) => {
  return (
    <section
      className={`${dir === "vertical" ? "flex-col" : "flex-row"} flex gap-4`}
    >
      {title}
      <div>{children}</div>
    </section>
  );
};
