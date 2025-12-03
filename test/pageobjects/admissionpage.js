import { browser } from "@wdio/globals";
import Page from './uvubasepage.js'


class AdmissionPage extends Page {


    get contentWrap () {return $('.content-wrap');}

    
    async admission () {

        const admissionHeaders = [
                'general',
                'transfer',
                'graduate',
                'international',
                'unique',
                'residency',
                'endorsement'
            ]
    
        for(let i =0; i<7; i++) {
            const header = admissionHeaders[i];
            await super.open('admissions/faq/')
            const admissionBtn = await $(`a[href="#${header}"]`);
            await admissionBtn.click();
            await this.contentWrap.waitForDisplayed();
           
        }}
    
}

export default new AdmissionPage ()