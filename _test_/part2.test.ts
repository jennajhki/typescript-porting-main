import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';

describe('part2.ts 파일 검증', () => {
  test('part2.ts 파일에는 any 타입이 포함되지 않아야 합니다.', () => {
    const filePath = path.join(__dirname, '../src/part2.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect(fileContent.includes('any')).toBe(false);
  });

  test('part2.ts 파일의 FILLMEIN 대신 타입을 넣어야 합니다.', () => {
    const filePath = path.join(__dirname, '../src/part2.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect(fileContent.includes('FILLMEIN')).toBe(false);
  });
});
