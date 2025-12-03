import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js'



describe('Login SauceDemo', () => {
   
    it('should login users with valid password', async () => {
       await LoginPage.allUsers('secret_sauce')
       
    })
    
    

     it('should not login users with invalid password', async () => {
       await LoginPage.loginError('wrongpassword')
       
    })

     

        })
    
        




    
    


   
