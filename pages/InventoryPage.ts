import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
