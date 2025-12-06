import { Description, IDescription } from "./description";
import { IMainText, MainText } from "./main-text";
import { IUpTitle, UpTitle } from "./up-title";

export interface ITitle {
  upTitle: IUpTitle;
  mainText: IMainText;
  description?: IDescription;
}

export const Title = ({ upTitle, mainText, description }: ITitle) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <UpTitle {...upTitle} />
      <MainText {...mainText} />
      <Description {...description} />
    </div>
  );
};
