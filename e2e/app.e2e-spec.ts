import { MapLayoutPage } from './app.po';

describe('MapLayout App', () => {
  let page: MapLayoutPage;

  beforeEach(() => {
    page = new MapLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
