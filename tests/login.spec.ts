import { test } from '@playwright/test';
import ENV from '../src/base/utils/env';
import LoginPage from './pages/loginPage';



test.describe('Feature:Login', () => {

    test('verify Login', async ({ page }) => {
        await page.goto(ENV.BASE_URL)
        await new LoginPage(page).login()
    });

    test('verify Logout', async ({ page }) => {
        await page.goto(ENV.BASE_URL)
        await new LoginPage(page).login()
        await new LoginPage(page).logout()
    });

})
