import { Twitchclips.IoPage } from './app.po';

describe('twitchclips.io App', () => {
  let page: Twitchclips.IoPage;

  beforeEach(() => {
    page = new Twitchclips.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
