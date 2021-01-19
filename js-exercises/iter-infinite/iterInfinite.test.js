import { count, cycle, repeat } from './iterInfinite';

//! CHECK: How to write a test-case for checking an infinite loop?
describe('iterInfinite', () => {
  describe('*count()', () => {
    it('Test #1: Check count method should return valid output', () => {
      const countIterator = count(0, 10, 5);
      const countResult = Array.from(countIterator);
      expect(countResult).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45]);
    });


    it('Test #2: Check count method throws errors when passing invalid arguments', () => {
      expect(() => Array.from(count("asd"))).toThrow();
      expect(() => Array.from(count("asd", null, null))).toThrow();
    });
  });

  describe('*cycle()', () => {
    it('Test #1: Check cycle method should return valid output', () => {
      const cycleIterator = cycle("ABCD", 2);
      const cycleResult = Array.from(cycleIterator);
      expect(cycleResult).toEqual(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
    });

    it('Test #2: Check cycle method throws errors when passing invalid arguments', () => {
      expect(() => Array.from(cycle(null))).toThrow();
      expect(() => Array.from(cycle(1234, "asdas"))).toThrow();
    });
  });

  describe('*repeat()', () => {
    it('Test #1: Check repeat method should return valid output', () => {
      const repeatIterator = repeat(1, 10);
      const repeatResult = Array.from(repeatIterator);
      expect(repeatResult).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });

    it('Test #2: Check repeat method throws errors when passing invalid arguments', () => {
      expect(() => Array.from(repeat(1, null))).toThrow();
      expect(() => Array.from(repeat(1234, "asdas"))).toThrow();
    });
  });
});