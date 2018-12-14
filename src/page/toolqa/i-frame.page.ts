import { element, browser, by, ElementFinder } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;
  private mainTitleLabel: ElementFinder;

  constructor() {
    this.frame = element(by.id('IF1'));
    this.mainTitleLabel = element(by.css('h1'));
  }

  public async getTitle(): Promise<string> {
    return await this.mainTitleLabel.getText();
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.frame.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
