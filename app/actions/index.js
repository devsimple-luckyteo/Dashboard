import { INCREASE, DECREASE } from './type';
import { log } from '../util/Utils';

export const counterIncrease = () => {
  log('counter Increase');
  return { type: INCREASE };
};
export const counterDecrease = () => {
  log('counter Decrease');
  return { type: DECREASE };
};
