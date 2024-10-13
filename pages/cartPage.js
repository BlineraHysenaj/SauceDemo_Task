exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.checkout_button = 'button[data-test="checkout"]';
        this.first_name_input = 'input[data-test="firstName"]';
        this.last_name_input = 'input[data-test="lastName"]';
        this.postal_code_input = 'input[data-test="postalCode"]';
        this.continue_button = 'input[data-test="continue"]';
        this.finish_button = 'button[data-test="finish"]';
        this.success_message = 'text=Thank you for your order'; 
        this.back_to_products_button = 'button[data-test="back-to-products"]'; 

      }
      async checkout(firstName, lastName, postalCode) {
        await this.page.click(this.checkout_button);
    
        await this.page.fill(this.first_name_input, firstName);
        await this.page.fill(this.last_name_input, lastName);
        await this.page.fill(this.postal_code_input, postalCode);
    
        await this.page.click(this.continue_button);
    
        await this.page.click(this.finish_button);
      }
    
      async isCheckoutSuccessful() {
        return await this.page.isVisible(this.success_message);
      }
      async goBackToHome() {
        await this.page.click(this.back_to_products_button);
      }
}