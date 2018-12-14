import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private goToCheckoutButton: ElementFinder;

  constructor() {
    this.goToCheckoutButton = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.goToCheckoutButton.click();
  }
}
