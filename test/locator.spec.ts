import { browser } from 'protractor';
import { User } from '../src/model';
import { PersonalInformationPage } from '../src/page';

describe('Given a page for automation tests', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when user try to fill personal information form with data', () => {
    const personalInformationPage = new PersonalInformationPage();
    const user = new User(
      'Sebastian',
      'Zapata',
      'Male',
      7,
      [
        'Automation Tester'
      ],
      [
        'Selenium Webdriver'
      ],
      'South America',
      [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands'
      ]);

    it('then the form should be filled with user data', async () => {
      await personalInformationPage.fillForm(user);
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
