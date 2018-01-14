import { get, parseAsArrayBuffer } from '../utils/fetch';

export function getAsArrayBuffer(url) {
  return get(url).then(parseAsArrayBuffer);
}
