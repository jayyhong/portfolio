import { PortfoPage } from './app.po';

describe('portfo App', () => {
  let page: PortfoPage;

  beforeEach(() => {
    page = new PortfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
