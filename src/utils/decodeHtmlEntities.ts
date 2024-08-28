import { decode } from "html-entities";

export const decodeHtmlEntities = (data: any): any => {
  if (typeof data === 'string') {
    return decode(data);
  }
  if (Array.isArray(data)) {
    return data.map(decodeHtmlEntities);
  }
  if (typeof data === 'object' && data !== null) {
    const decodedObject: any = {};
    Object.keys(data).forEach(key => {
      decodedObject[key] = decodeHtmlEntities(data[key]);
    });
    return decodedObject;
  }
  return data;
}
