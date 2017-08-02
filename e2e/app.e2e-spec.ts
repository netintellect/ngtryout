import { NetintellectPage } from './app.po';

describe('netintellect App', () => {
  let page: NetintellectPage;

  beforeEach(() => {
    page = new NetintellectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
