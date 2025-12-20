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
    <div className="flex justify-center gap-6 items-center flex-col">
      <UpTitle {...upTitle} />
      <MainText {...mainText} />
      {description ? <Description {...description} /> : null}
    </div>
  );
};
