const { test } = require('@playwright/test');

test('Fetch iPhone price from Flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com');

    // Close login popup

    const closeBtn = page.locator('button:has-text("✕")');

    if (await closeBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
        await closeBtn.click();
    }

    // Search product
    await page.locator('input[name="q"]:visible').fill('iPhone 17');
    await page.keyboard.press('Enter');

    // Wait for products
    await page.waitForSelector('div[data-id]');

});