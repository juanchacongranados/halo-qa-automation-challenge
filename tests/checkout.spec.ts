import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { users, checkoutData } from "../test-data/users";

test("should complete a purchase successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory\.html/);

  // Add product to cart
  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText("1");

  // Validate cart

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart\.html/);

  await expect(cartPage.productName).toHaveText("Sauce Labs Backpack");

  // Checkout
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCustomerInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode,
  );

  // Validate checkout overview
  await expect(page).toHaveURL(/checkout-step-two\.html/);

  await expect(checkoutPage.overviewProductName).toHaveText(
    "Sauce Labs Backpack",
  );

  // Complete purchase
  await checkoutPage.finishPurchase();

  // Validate confirmation
  await expect(checkoutPage.confirmationMessage).toHaveText(
    "Thank you for your order!",
  );
});
