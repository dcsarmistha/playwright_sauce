import { EcommercePage } from "../pages/Ecommercepage";
import { Locator, expect, Page, test} from "@playwright/test";
import { validCredentials } from "../test-data/loginData";
import { checkoutPage } from "../pages/checkoutPage";

test.beforeEach (async({page})=>{
const loginVar= new EcommercePage(page);
loginVar.navigateHome();
 loginVar.loginFunc(
    validCredentials.username,
    validCredentials.password
)
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('complete the checkout - positive case', async({page})=>{
const checkVar= new checkoutPage(page);
await checkVar.checkoutFlow();
});

test('filter the products', async({page})=>{
const checkVar= new checkoutPage(page);
await checkVar.filterFlow();
});
test.afterEach(async({page})=>{
console.log('test completed succesfully');
});