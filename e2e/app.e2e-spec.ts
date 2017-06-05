import { SnakeAndLadderPage } from './app.po';

describe('snake-and-ladder App', () => {
  let page: SnakeAndLadderPage;

  beforeEach(() => {
    page = new SnakeAndLadderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
