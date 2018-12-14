import { element, by, ElementFinder } from 'protractor';
import { User } from '../model';

export class PersonalInformationPage {
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;

  constructor() {
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
  }

  private selectSexOption(sex: string): ElementFinder {
    if (sex === 'Male') {
      return element(by.id('sex-0'));
    }
    return element(by.id('sex-1'));
  }

  private selectExperience(years: number): ElementFinder {
    return element(by.id(`${years - 1}`));
  }

  public async fillForm(data: User) {
    await this.firstNameInput.sendKeys(data.firstName);
    await this.lastNameInput.sendKeys(data.lastName);
    await this.selectSexOption(data.sex).click();
    await this.selectExperience(data.experience).click();
  }
}
