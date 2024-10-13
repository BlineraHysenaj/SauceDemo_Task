exports.LogoutPage = class LogoutPage {
    constructor(page) {
        this.page = page;
        this.burger_menu_button = '#react-burger-menu-btn'; 
        this.logout_button = '#logout_sidebar_link'; 
    }
  
    async performLogout() {
        await this.page.click(this.logout_button);
        await this.page.waitForURL('**/login');
    }
    async clickBurgerMenu() {
        await this.page.waitForSelector(this.burger_menu_button);
        await this.page.click(this.burger_menu_button);
      }
    
      async clickLogout() {
        await this.page.waitForSelector(this.logout_button);
        await this.page.click(this.logout_button);
      }
  };
  