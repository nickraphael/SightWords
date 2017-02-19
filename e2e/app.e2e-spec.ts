import { SightWordsPage } from './app.po';

describe('sight-words App', () => {
  let page: SightWordsPage;

  beforeEach(() => {
    page = new SightWordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
