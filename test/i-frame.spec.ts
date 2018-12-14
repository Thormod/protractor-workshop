import { browser } from 'protractor';
import { IFramePage } from '../src/page/toolqa';

describe('Given a page with a iframe', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  const iframe: IFramePage = new IFramePage();

  it('Then it should have the main title', async () => {
    expect(await iframe.getTitle()).toBe('IFrame practice page');
  });
});
