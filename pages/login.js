exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textBox = page.locator('[data-test="username"]');
    this.password_textBox = page.locator('[data-test="password"]');
    this.login_button = page.getByRole("button", { name: "LOGIN" });
  }

  async goToSauceDemo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.username_textBox.fill(username);
    await this.password_textBox.fill(password);
    await this.login_button.click();
  }
};
