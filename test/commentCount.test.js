import commentCounter from '../src/modules/commentCount.js';

describe('commentCounter', () => {
  it('Comments count should be 0', () => {
    expect(commentCounter()).toBe(0);
  });
});