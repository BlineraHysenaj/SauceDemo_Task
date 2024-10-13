exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.product_list =
      '//*[@id="inventory_container"]/div/div/div/div/div/div/a';
    this.add_to_cart = '[data-test="add-to-cart"]';
    this.remove_from_cart = '[data-test="remove"]';
    this.cart = '[data-test="shopping-cart-link"]';
  }

  async addProductToCart(productName) {
    const product_list = await this.page.$$(this.product_list);
    for (const product of product_list) {
      const productTitle = await product.textContent();
      if (productTitle.trim() === productName) {
        await product.click();
        await this.page.locator(this.add_to_cart).click();
        await this.page.locator(this.remove_from_cart).click();
        await this.page.locator(this.add_to_cart).click();
        break;
      }
    }
  }

  async goToCart() {
    await this.page.locator(this.cart).click();
  }
};
