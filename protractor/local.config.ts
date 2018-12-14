import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 3000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
  }
};
