import { numberToWordConverter } from './number-to-word.converter';

describe.only('numberToWordConverter', () => {
  describe('sequency number', () => {
    it('when pass 22, should return ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"]', () => {
      const sequence = 22;
      const expectedResult = [
        'aa',
        'ab',
        'ac',
        'ba',
        'bb',
        'bc',
        'ca',
        'cb',
        'cc',
      ];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });
    it('when pass 23, should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
      const sequence = 23;
      const expectedResult = [
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 234, should return ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]', () => {
      const sequence = 234;
      const expectedResult = [
        'adg',
        'adh',
        'adi',
        'aeg',
        'aeh',
        'aei',
        'afg',
        'afh',
        'afi',
        'bdg',
        'bdh',
        'bdi',
        'beg',
        'beh',
        'bei',
        'bfg',
        'bfh',
        'bfi',
        'cdg',
        'cdh',
        'cdi',
        'ceg',
        'ceh',
        'cei',
        'cfg',
        'cfh',
        'cfi',
      ];
      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('single number', () => {
    it('when pass 1, should return ,?!', () => {
      const sequence = 1;
      const expectedResult = [',', '?', '!'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 2, should return ABC', () => {
      const sequence = 2;
      const expectedResult = ['a', 'b', 'c'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 3, should return DEF', () => {
      const sequence = 3;
      const expectedResult = ['d', 'e', 'f'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 4, should return GHI', () => {
      const sequence = 4;
      const expectedResult = ['g', 'h', 'i'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 5, should return JKL', () => {
      const sequence = 5;
      const expectedResult = ['j', 'k', 'l'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 6, show return MNO', () => {
      const sequence = 6;
      const expectedResult = ['m', 'n', 'o'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 7, show return PQRS', () => {
      const sequence = 7;
      const expectedResult = ['p', 'q', 'r', 's'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 8, show return TUV', () => {
      const sequence = 8;
      const expectedResult = ['t', 'u', 'v'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });

    it('when pass 9, show return WXYZ', () => {
      const sequence = 9;
      const expectedResult = ['w', 'x', 'y', 'z'];

      const result = numberToWordConverter(sequence);

      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('real case', () => {
    it('when pass 84265, should have "thank" in the return', () => {
      const sequence = 84265;
      const expectedResultContains = 'thank';

      const result = numberToWordConverter(sequence);

      expect(result).toContain(expectedResultContains);
    });

    it('when pass 968, should have "you" in the return', () => {
      const sequence = 968;
      const expectedResultContains = 'you';

      const result = numberToWordConverter(sequence);

      expect(result).toContain(expectedResultContains);
    });

    it('when pass 367, should have "for" in the return', () => {
      const sequence = 367;
      const expectedResultContains = 'for';

      const result = numberToWordConverter(sequence);

      expect(result).toContain(expectedResultContains);
    });

    it('when pass 447464, should have "hiring" in the return', () => {
      const sequence = 447464;
      const expectedResultContains = 'hiring';

      const result = numberToWordConverter(sequence);

      expect(result).toContain(expectedResultContains);
    });

    it('when pass 63, should have "me" in the return', () => {
      const sequence = 63;
      const expectedResultContains = 'me';

      const result = numberToWordConverter(sequence);

      expect(result).toContain(expectedResultContains);
    });
  });
});
