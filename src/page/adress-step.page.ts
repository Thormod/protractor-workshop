import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[name="processAddress"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
