const { test, expect } = require("@playwright/test");
import { CartPage } from "../pages/cartPage";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";

test("Saucedemo Test", async ({ page }) => {
  
  //Navigimi ne SauceDemo dhe Logini
  const Login = new LoginPage(page);
  await Login.goToSauceDemo();
  await Login.login("standard_user", "secret_sauce");

  // Shtimi/Largimi i nje Item ne Checkout
  const Home = new HomePage(page);
  await Home.addProductToCart("Sauce Labs Backpack");
  await Home.goToCart();

  //Mbushja e te dhenave ne Checkout
  const Cart = new CartPage(page);
  await Cart.checkout("Blinera", "Hysenaj", "72000");

  //Perfundimi i blerjes
  const success = await Cart.isCheckoutSuccessful();
  expect(success).toBeTruthy();

  //Kthimi ne Homepage
  await Cart.goBackToHome();

  //Logout
  const Logout = new LogoutPage(page);
  await Logout.clickBurgerMenu();
  await Logout.clickLogout();
});
