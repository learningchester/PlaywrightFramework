import { Page } from "@playwright/test";
import Wrapper from "../../src/wrapper";
import ENV from "../../src/base/utils/env";

export default class LoginPage extends Wrapper {


    constructor(public page: Page) {
        super(page)
    }

    public async enterEmail() {
        const email = await this.findLocator('[data-testid="email"]')
        await email.waitFor({ state: 'attached' })
        await email.fill(ENV.USERNAME)
    }

    public async enterPassword() {
        const pwd = await this.findLocator('[data-testid="password"]')
        await pwd.fill(ENV.PASSWORD)
    }

    public async login() {
        await this.enterEmail()
        await this.enterPassword()
        await this.clickElement('[data-testid="login-submit"]')
        await this.enterConfirmationCode()
        await this.clickElement('[data-testid="confirm-button"]')
        await this.page.locator('[data-testid="profile_icon"]').waitFor({ state: 'attached' })
    }

    public async enterConfirmationCode() {
        const confirmationCode = await this.findLocator('[data-testid="confirmationCode"]')
        await confirmationCode.waitFor({ state: 'attached' })
        await confirmationCode.fill('123456')
    }

    public async logout() {
        await this.clickElement('.MuiButtonBase-root > [data-testid="profile_icon"]')
        await this.clickElement('[data-testid="logout"]')
        await this.clickElement('[data-testid="logout-btn"]')
        await this.page.locator('#email').waitFor({ state: 'visible' })
    }

}