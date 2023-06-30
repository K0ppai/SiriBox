import { countShows } from '../src/modules/showCount.js';
import '../node_modules/jsdom-global/register.js';

describe('Shows counter', () => {
  beforeAll(() => {
    document.body.innerHTML = '<ul id="lists-container" class="row row-cols-md-3 p-0 g-md-4 m-0"><li></li><li></li></ul>';
  });

  test('Shows count should be 2', async () => {
    expect(countShows()).toBe(2);
  });
});

describe('Shows Counter', () => {
  beforeAll(() => {
    document.body.innerHTML = '<ul id="lists-container" class="row row-cols-md-3 p-0 g-md-4 m-0"></ul>';
  });

  test('Shows count should be 0', async () => {
    expect(countShows()).toBe(0);
  });
});