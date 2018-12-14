import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private goToCheckoutButton: ElementFinder;

  constructor() {
    this.goToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.goToCheckoutButton), 5000);
    await this.goToCheckoutButton.click();
  }
}
