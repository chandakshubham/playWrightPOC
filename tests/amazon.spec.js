const { test } = require('@playwright/test');

test('Fetch iPhone price from Amazon', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.locator('#twotabsearchtextbox').fill('iPhone 17');
    await page.keyboard.press('Enter');

    await page.waitForSelector('[data-component-type="s-search-result"]');

    const products = page.locator('[data-component-type="s-search-result"]');

    const secondProduct = products.nth(1);

    const price = await secondProduct.locator('.a-price-whole').first().innerText();

    console.log("Amazon Price:", price);

});
