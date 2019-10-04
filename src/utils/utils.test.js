import selectFields from './selectFields';

describe('Utils tests', () => {
  it('Select fields util', () => expect(typeof selectFields({})).toBe('object'));
});
