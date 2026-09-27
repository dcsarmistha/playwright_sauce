import { EcommercePage } from "./Ecommercepage";
import { Locator, expect, Page } from "@playwright/test";

export class checkoutPage {
readonly page: Page;
readonly addToCart: Locator;
readonly gotoCart: Locator;
readonly checkBtn: Locator;
readonly firstField: Locator;
readonly lastField: Locator;
readonly zipField: Locator;
readonly continue: Locator;
readonly finish: Locator;
readonly completed: Locator;
readonly filterTry: Locator;

constructor(page: Page){
    this.page= page;
    this.addToCart= page.locator('#add-to-cart-sauce-labs-bike-light')
    this.gotoCart= page.getByRole('button', {name: /Cart/});
    this.checkBtn= page.getByRole('button', {name: 'Checkout'});
    this.firstField= page.getByRole('textbox', {name: 'First Name'});
    this.lastField= page.getByRole('textbox', {name: 'Last Name'});
    this.zipField= page.getByRole('textbox', {name: 'Zip/Postal Code'});
    this.continue= page.getByRole('button', {name: 'Continue'});
    this.finish= page.getByRole('button', {name: 'Finish'});
    this.completed= page.getByRole('heading', {name: 'Thank you for your order!'});
    this.filterTry= page.getByRole('combobox', {name: 'Sort products'});
}

async checkoutFlow(){
    await this.addToCart.click();
    await this.gotoCart.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    await this.checkBtn.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await this.firstField.fill('sarmistha');
    await this.lastField.fill('dc');
    await this.zipField.fill('2222');
    await this.continue.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await this.finish.click();
    await expect(this.completed).toHaveText('Thank you for your order!');
}
async filterFlow(){
    await this.filterTry.selectOption('lohi');
}
}
