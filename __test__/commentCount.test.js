import commentCounter from '../src/modules/commentCount.js';
import '../node_modules/jsdom-global/register.js';

describe('commentCounter', () => {
  beforeAll(() => {
    document.body.innerHTML = '<ul id="comments"><li></li><li></li><li></li></ul><h2 class="fs-5" id="comment-title"></h2>';
  });

  test('Comments count should be 3', async () => {
    const ul = document.getElementById('comments');
    const childCount = ul.childElementCount;
    const count = await commentCounter();
    expect(count).toBe(childCount);
  });
});

describe('commentCounter', () => {
  beforeAll(() => {
    document.body.innerHTML = '<ul id="comments"></ul><h2 class="fs-5" id="comment-title"></h2>';
  });

  test('Comments count should be 0', async () => {
    const ul = document.getElementById('comments');
    const childCount = ul.childElementCount;
    const count = await commentCounter();
    expect(count).toBe(childCount);
  });
});
