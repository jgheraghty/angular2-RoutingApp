import { RoutingAngular2Page } from './app.po';

describe('routing-angular2 App', function() {
  let page: RoutingAngular2Page;

  beforeEach(() => {
    page = new RoutingAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
