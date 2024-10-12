const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/login'

test('Login Test', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.goToSauceDemo()
    await Login.login('standard_user', 'secret_sauce')
})