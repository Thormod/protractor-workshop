import { element, by, ElementFinder } from 'protractor';
import { User } from '../../model';

export class PersonalInformationPage {
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private pageTitleLabel: ElementFinder;
  private submitButton: ElementFinder;

  constructor() {
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.pageTitleLabel = element(by.id('content')).element(by.tagName('h1'));
    this.submitButton = element(by.id('submit'));
  }

  private selectSexOption(sex: string): ElementFinder {
    if (sex === 'Male') {
      return element(by.id('sex-0'));
    }
    return element(by.id('sex-1'));
  }

  private selectExperience(years: number): ElementFinder {
    return element(by.id(`exp-${years - 1}`));
  }

  private selectProfession(profession: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private selectTool(tool: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }
  private selectContinent(continent: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', continent));
  }

  private selectCommand(command: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', command));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async fillForm(data: User): Promise<void> {
    await this.firstNameInput.sendKeys(data.firstName);
    await this.lastNameInput.sendKeys(data.lastName);
    await this.selectSexOption(data.sex).click();
    await this.selectExperience(data.experience).click();

    for (const profession of data.profession) {
      await this.selectProfession(profession).click();
    }

    for (const tool of data.tool) {
      await this.selectTool(tool).click();
    }

    await this.selectContinent(data.continent).click();

    for (const command of data.command) {
      await this.selectCommand(command).click();
    }

    await this.submitButton.click();
  }
}
