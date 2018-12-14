import { browser } from 'protractor';
import { User } from '../src/model';
import { PersonalInformationPage } from '../src/page';

describe('Given a page for automation tests', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when user try to fill personal information form with data', () => {
    const personalInformationPage = new PersonalInformationPage();
    const user = new User();
    user.firstName = 'Sebastian';
    user.lastName = 'Zapata';
    user.sex = 'Male';
    user.experience = 7;

    personalInformationPage.fillForm(user);

    it('then the form should be filled with user data', () => {

    });
  });
});
