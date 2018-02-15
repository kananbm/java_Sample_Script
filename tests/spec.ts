import {browser} from 'protractor';
// local import of the exported SampleApplicationPage class
import {SampleApplicationPage} from './sampleApplication.po';

describe('Sample Application homepage', () => {
    let page: SampleApplicationPage;

      let imageSrc: string = "https://demo.cyclos.org/content/images/currentConfiguration/SYSTEM_LOGO?mod=1498899439344";
  //  let title: string = "Mock Trading - Online Futures Trading Simulator";
  //  let message: string = "Kanna";

    beforeAll(() => {
        browser.ignoreSynchronization = true;
        page = new SampleApplicationPage();
        return page.get();
    });

   it('test top image validness', () => {
        expect(page.getImageSrc()).toContain(imageSrc);
    });
   /* 

    it('test title validness', () => {
        expect(page.getTitle()).toMatch(title);
    });

    it('test message validness', () => {
        expect(page.getMessage()).toMatch(message);
    });

    afterAll(() => {
        browser.ignoreSynchronization = false;
    });
    */
});
