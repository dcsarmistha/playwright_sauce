import { Page, Locator, expect} from "@playwright/test";

export class EcommercePage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly lockedError: Locator;
    
constructor (page: Page){
    this.page= page;
    this.usernameInput= page.getByPlaceholder('Username');
    this.passwordInput= page.getByPlaceholder('Password');
    this.loginBtn= page.getByRole('button', {name: 'Login'});   
    this.lockedError= page.getByRole('alert');
}
async navigateHome(){
    await this.page.goto('https://www.saucedemo.com/');
}
async loginFunc(standard_user: string, secret_sauce: string){
    await this.usernameInput.fill(standard_user);
    await this.passwordInput.fill(secret_sauce);
    await this.loginBtn.click();
}
async lockedMess(){
    await expect(this.lockedError).toHaveText(
  'Epic sadface: Sorry, this user has been locked out.'
);
}
}