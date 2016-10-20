import { NgCounterPage } from './app.po';

describe('ng-counter App', function() {
  let page: NgCounterPage;

  beforeEach(() => {
    page = new NgCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
