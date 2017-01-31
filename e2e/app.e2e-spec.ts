import { AngulatCliTestSnadboxPage } from './app.po';

describe('angulat-cli-test-snadbox App', function() {
  let page: AngulatCliTestSnadboxPage;

  beforeEach(() => {
    page = new AngulatCliTestSnadboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
