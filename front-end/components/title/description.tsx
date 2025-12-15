export interface IDescription {
  text?: string;
}

export const Description = ({ text }: IDescription) => {
  return (
    <p className="text-gray max-w-xl backdrop-blur-2xl rounded-2xl border border-border p-2 text-center">
      {text}
    </p>
  );
};
