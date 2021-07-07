type attributesData = {
  encoding: string;
  version: string;
};
type declarationData = {
  attributes: attributesData;
};
type attributesDate = {
  today: string;
  tomorrow: string;
  tomorrow02: string;
  yesterday: string;
};
type elementsZodiac = {
  attributes: attributesDate;
  name: string;
  type: string;
};
type elementData = {
  name: string;
  type: string;
  elements: elementsZodiac;
};
type elementsData = {
  0: elementData;
};
export interface IZodiacData {
  declaration: declarationData;
  elements: elementsData;
}
