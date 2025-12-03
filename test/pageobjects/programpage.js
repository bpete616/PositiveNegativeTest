import { $$, browser } from '@wdio/globals'
import Page from './uvubasepage.js'



class ProgramPage extends Page {

    get contentContainer () {return $('#content-container');}


        async programs () {
    
            const idTabs = [ 
                'textcontainer',
                'requirementstextcontainer',
                'graduationplantextcontainer',
                'learningoutcomestextcontainer',
                'careerstextcontainer'
            ]

    
        for(let i = 0; i < 5; i++) {
    
            const id = idTabs[i]
            await super.catelogopen('engineering-technology/computer-science/software-development-bas/')
            await browser.maximizeWindow()
            const programTab = await $(`[href="#${id}"]`);
            await programTab.click();
            await this.contentContainer.waitForDisplayed();
    
        }
    }
    
}

export default new ProgramPage ()