export interface IDescription {
  text?: string;
}

export const Description = ({ text }: IDescription) => {
  return <p className="text-green">{text}</p>;
};
