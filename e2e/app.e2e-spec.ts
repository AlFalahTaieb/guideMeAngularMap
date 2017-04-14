import { GuidemePage } from './app.po';

describe('guideme App', function() {
  let page: GuidemePage;

  beforeEach(() => {
    page = new GuidemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
