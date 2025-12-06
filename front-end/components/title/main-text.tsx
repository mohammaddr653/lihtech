import { title } from "../primitives";

export interface IMainText {
  type: "super" | "normal";
  children: React.ReactNode;
}

export const MainText = ({ type, children }: IMainText) => {
  const Tag = type === "super" ? "h1" : "h2";

  return (
    <Tag
      className={`${title({
        size: type === "super" ? "lg" : "sm",
      })} text-center`}
    >
      {children}
    </Tag>
  );
};
