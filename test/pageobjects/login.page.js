import { expect } from '@wdio/globals'
import PageBase from './sauce.page.js';
 
class LoginPage extends PageBase {
    get usernameInput () {return $('#user-name');}
    get passwordInput () {return $('#password');}
    get loginBtn () {return $('#login-button');}
    get inventoryContainer() {return $('#inventory_container');}
    get errorMessage () {return $('h3[data-test="error"]');}
    get removeBtn () {return $('#remove-sauce-labs-backpack');}

    

    async open () {
        await super.open('https://www.saucedemo.com/');
        await this.usernameInput.waitForDisplayed();
        await this.passwordInput.waitForDisplayed();
    }
    
    async loginSuccessful(username, password) {
        await this.open('https://www.saucedemo.com/');
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password); 
        await this.loginBtn.click();
        await this.inventoryContainer.waitForDisplayed();
        await expect(this.inventoryContainer).toBeDisplayed();
         
        
    }

    async loginError (password) {


        const users = [

            'standard_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user',
            'locked_out_user',

            ]

         for(let i = 0; i<6; i++) {

           
            const user = users[i]
            await this.open('https://www.saucedemo.com/')
            await this.usernameInput.setValue(user)
            await this.passwordInput.setValue(password)
            await this.loginBtn.click();
            await expect(this.errorMessage).toBeDisplayed();
           
        }

    }

    async allUsers(password) {

        const users = [

            'standard_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user'

            ]

        for(let i = 0; i<5; i++) {

            const user = users[i]
            await this.open('https://www.saucedemo.com/')
            await this.usernameInput.setValue(user)
            await this.passwordInput.setValue(password)
            await this.loginBtn.click();
            await expect(this.inventoryContainer).toBeDisplayed();
        }


    }

    }
    
    
   

export default new LoginPage();
