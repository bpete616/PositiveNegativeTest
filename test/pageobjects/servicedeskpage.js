import { $$, browser } from '@wdio/globals'
import Page from './uvubasepage.js';


class ServiceDesk extends Page { 


     get serviceContainer () {return $('.container-fluid');}
     get serviceStatisticsInventory () {return $('h1[style="text-align: center;"]');}
   

    async serviceDesk () {

        const deskComponents = [
            'selfservice',
            'chat',
            'phone',
            'walkin',
            'status',
        
        ]
        

        for(let i=0; i<5; i++) {
            
            const serviceId = deskComponents[i]
            await super.open('servicedesk')
            const tab = await $(`[role="tab"][href="#${serviceId}"]`)
            await tab.click();
            await this.serviceContainer.waitForDisplayed();
            
            
        }
    }



    async statisticsLink () {

        await super.open('servicedesk')
        const serviceStatisticsBtn = await $('//*[text()="Service Desk Statistics"]')
        await serviceStatisticsBtn.click();
        await this.serviceStatisticsInventory.waitForDisplayed()
        await expect(this.serviceStatisticsInventory).toHaveText('Enterprise Service Desk Statistics')
    }
    


}
    
        
    export default new ServiceDesk ()
       


        
        

