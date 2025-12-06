import React from "react";

export interface IUpTitle {
  icon: React.ReactNode;
  content: string;
}

export const UpTitle = ({ icon, content }: IUpTitle) => {
  return (
    <span className="flex items-center border border-border p-1 rounded-full gap-2">
      <span className="bg-gray4 p-1 text-gray rounded-full">{icon}</span>
      <h4 className="text-gray bg-gray4 px-2 py-1 rounded-full">{content}</h4>
    </span>
  );
};
