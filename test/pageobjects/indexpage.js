import { $, browser, expect } from "@wdio/globals";
import Page from './uvubasepage.js' 



class IndexPage extends Page {

    
    get searchResults () {return $('.searchPage');}


    async searchIndex () {

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVW'.slice('');

        for(let i = 0; i < 23; i++) {

            const letter = alphabet[i]
            await super.open('search/')
            const letterBtn = await $(`[href="?p=${letter}"]`);
            await letterBtn.click();
            await this.searchResults.waitForDisplayed();

        }}
    
  }


    export default new IndexPage();


    





