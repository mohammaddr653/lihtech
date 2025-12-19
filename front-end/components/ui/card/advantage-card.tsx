import React from "react";

export interface IAdvantageCard {
  icon: React.ReactNode;
  title: string;
}

export const AdvantageCard = ({ icon, title }: IAdvantageCard) => {
  return (
    <li className="bg-secondary shadow-2xl border border-border flex gap-4 p-2 items-center rounded-full w-full">
      <span className="bg-gray4 border border-border text-green p-2 rounded-full">
        {icon}
      </span>
      <h5>{title}</h5>
    </li>
  );
};
