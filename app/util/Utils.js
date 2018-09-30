import { debug } from './Constants';

export function log(msg) {
  if (debug) console.log(msg);
}
