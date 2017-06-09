import { UdemyAngular4Page } from './app.po';

describe('udemy-angular4 App', () => {
  let page: UdemyAngular4Page;

  beforeEach(() => {
    page = new UdemyAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
