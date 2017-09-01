import { ZyzmozPage } from './app.po';

describe('zyzmoz App', () => {
  let page: ZyzmozPage;

  beforeEach(() => {
    page = new ZyzmozPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
