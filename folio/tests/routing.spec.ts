import { test, expect } from '@playwright/test'

test('should navigate to the dashboard (logged out) page', async ({ page }) => {
    // Start from the root page
    await page.goto('/')
    // The URL should be "/" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000')
    // The new page should contain an h1 with "FOLIO"
    await expect(page.locator('main > div > div > h1')).toContainText('FOLIO')

    // The new page should now show the NavBar and contain a p with "Home"
    await expect(page.locator('main > div > p')).toContainText('Home')

    // The user should be able to see the notification Icon
    

})