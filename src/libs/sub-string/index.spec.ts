import { test, expect } from 'vitest';
import { localizeDate } from '.';

test('localizeDate', () => {
    const date = new Date('2025-01-16T01:00:00');

    const expected = '16/01/2025';
    const result = localizeDate(date);

    expect(result).toEqual(expected);
});
