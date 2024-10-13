exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textBox = '[data-test="username"]';
    this.password_textBox ='[data-test="password"]';
    this.login_button = page.getByRole("button", { name: "LOGIN" });
  }

  async goToSauceDemo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.page.fill(this.username_textBox, username);
    await this.page.fill(this.password_textBox, password);
    await this.login_button.click();
  }
};
