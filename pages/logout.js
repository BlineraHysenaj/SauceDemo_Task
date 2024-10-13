exports.LogoutPage = class LogoutPage {
    constructor(page) {
        this.page = page;
        this.burgerMenuButton = '#react-burger-menu-btn'; 
        this.logoutButton = '#logout_sidebar_link'; 
    }
  
    async performLogout() {
        await this.page.click(this.logoutButton);
        await this.page.waitForURL('**/login');
    }
    async clickBurgerMenu() {
        await this.page.waitForSelector(this.burgerMenuButton);
        await this.page.click(this.burgerMenuButton);
      }
    
      async clickLogout() {
        await this.page.waitForSelector(this.logoutButton);
        await this.page.click(this.logoutButton);
      }
  };
  