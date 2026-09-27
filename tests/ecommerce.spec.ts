import { Locator, test, expect } from "@playwright/test";
import { EcommercePage } from "../pages/EcommercePage";
import { validCredentials, lockedoutUser, performanceglitchUser } from "../test-data/loginData";
test.beforeEach(async ({page})=>{
const loginVar= new EcommercePage(page);
loginVar.navigateHome();
});
test('Login to sauce demo', async({page})=>{
    const loginVar= new EcommercePage(page);
    loginVar.loginFunc(
        validCredentials.username,
        validCredentials.password
    );
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
test ('Lockedout user login attempt', async({page})=>{
const loginVar= new EcommercePage(page);
    loginVar.loginFunc(
        lockedoutUser.username,
        lockedoutUser.password
    );
   await loginVar.lockedMess();
});
test.beforeEach(async({page})=>{
console.log('Test completed succesffuly');
});
// test ('Performance glitch user login attempt', async({page})=>{
// const loginVar= new EcommercePage(page);
//     loginVar.loginFunc(
//         performanceglitchUser.username,
//         performanceglitchUser.password
//     );
// });
