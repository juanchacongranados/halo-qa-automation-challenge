import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page
      .locator('[data-test="inventory-item-name"]')
      .filter({ hasText: "Sauce Labs Backpack" });

    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
