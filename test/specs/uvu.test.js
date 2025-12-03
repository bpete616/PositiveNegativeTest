import { expect } from '@wdio/globals'
import Page from '../pageobjects/uvubasepage.js';
import ServiceDesk from '../pageobjects/servicedeskpage.js';
import ProgramPage from '../pageobjects/programpage.js';
import AdmissionPage from '../pageobjects/admissionpage.js';
import IndexPage from '../pageobjects/indexpage.js';



describe('UVU Test Cases', () => {
    
    it('Every letter is clicked and appears below Search page', async () => {
        await IndexPage.searchIndex();
    })


    it('Should highlight and drop down header for review', async () => {
        await AdmissionPage.admission();
    })

    it('Should click and open all headers of selected Program', async () => {
        await ProgramPage.programs(); 

    })

    it('Should click all service components and open last service desk link', async () => {
        await ServiceDesk.serviceDesk();
        
    })

    it('Clicking Service Desk Statistics link should navigate to correct page', async () => {
        await ServiceDesk.statisticsLink();
    })

})