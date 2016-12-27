import { KoleWebPage } from './app.po';

describe('kole-web App', function() {
  let page: KoleWebPage;

  beforeEach(() => {
    page = new KoleWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
