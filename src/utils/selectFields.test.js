import selectFields from './selectFields';

test('Select fields util', () => expect(typeof selectFields({})).toBe('object'));
