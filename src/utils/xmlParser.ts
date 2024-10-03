import { parseStringPromise } from "xml2js";

export const parseXML = async (xml: string) => {
  const result = await parseStringPromise(xml);
  return result;
};
