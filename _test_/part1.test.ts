import { describe, test, expect } from '@jest/globals';

import {
  isDone,
  isShow,
  num1,
  num2,
  str,
  list1,
  list2,
  list3,
  list4,
  list5,
  obj,
  obj2,
} from '../src/part1';

describe('TypeScript 기본 타입 테스트', () => {
  test('boolean 타입 확인', () => {
    expect(typeof isDone).toBe('boolean');
    expect(isDone).toBe(false);
    expect(typeof isShow).toBe('boolean');
    expect(isShow).toBe(true);
  });

  test('number 타입 확인', () => {
    expect(typeof num1).toBe('number');
    expect(num1).toBe(7);
    expect(typeof num2).toBe('number');
    expect(num2).toBe(0.6878);
  });

  test('string 타입 확인', () => {
    expect(typeof str).toBe('string');
    expect(str).toBe('hello');
  });

  test('배열 타입 확인 (숫자 배열)', () => {
    expect(Array.isArray(list1)).toBe(true);
    expect(list1).toEqual([1, 2, 3]);
    expect(Array.isArray(list2)).toBe(true);
    expect(list2).toEqual([1, 2, 3]);
  });

  test('배열 타입 확인 (문자열 배열)', () => {
    expect(Array.isArray(list3)).toBe(true);
    expect(list3).toEqual(['banana', 'apple', 'mango']);
    expect(Array.isArray(list4)).toBe(true);
    expect(list4).toEqual(['banana', 'apple', 'mango']);
  });

  test('튜플 타입 확인', () => {
    expect(Array.isArray(list5)).toBe(true);
    expect(list5).toEqual([1, 'banana', true]);
  });

  test('객체 타입 확인', () => {
    expect(typeof obj).toBe('object');
    expect(obj).toEqual({});

    expect(typeof obj2).toBe('object');
    expect(obj2).toEqual({
      name: 'alice',
      age: 20,
      isDeveloper: true,
    });
  });
});
