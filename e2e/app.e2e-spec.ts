import { PokemonPage } from './app.po';

describe('Pokemon App', function() {
  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
