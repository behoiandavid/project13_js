const { ageClassification, weekFn } = require('./index');

describe('ageClassification()', () => {
    test('negative number → null', () => {
        expect(ageClassification(-1)).toBe(null);
    });
    test('0–24 → Дитинство', () => {
        expect(ageClassification(0)).toBe('Дитинство');
        expect(ageClassification(24)).toBe('Дитинство');
    });
    test('24.01–44 → Молодість', () => {
        expect(ageClassification(24.01)).toBe('Молодість');
        expect(ageClassification(44)).toBe('Молодість');
    });
    test('122.01 → null', () => {
        expect(ageClassification(122.01)).toBe(null);
    });
});

describe('weekFn()', () => {
    test('1 → Понеділок', () => {
        expect(weekFn(1)).toBe('Понеділок');
    });
    test('7 → Неділя', () => {
        expect(weekFn(7)).toBe('Неділя');
    });
    test('0, 1.5, "2" → null', () => {
        expect(weekFn(0)).toBe(null);
        expect(weekFn(1.5)).toBe(null);
        expect(weekFn('2')).toBe(null);
    });
});