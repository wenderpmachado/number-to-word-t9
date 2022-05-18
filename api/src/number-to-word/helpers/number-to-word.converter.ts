import { isString } from 'lodash';
import { KEYS } from './../../constants';

export const numberToWordConverter = (
  sequence: string | number,
): false | string[] => {
  const stringSequence = isString(sequence) ? sequence : sequence.toString();

  if (!stringSequence || stringSequence.length === 0) {
    return false;
  }

  if (stringSequence.length === 1) {
    return KEYS[stringSequence].split('').map((word) => word.toLowerCase());
  }

  const possibilities = stringSequence
    .split('')
    .map((key) => KEYS[key].split(''))
    .reduce((previousArray: string[], currentArray: string[]) => {
      const next = [];

      for (const previous of previousArray) {
        for (const current of currentArray) {
          const combination = (previous + current).toLowerCase();
          next.push(combination);
        }
      }

      return next;
    });

  return possibilities;
};
