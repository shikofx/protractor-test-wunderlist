'use strict'

class MainMenu {
    constructor() {
        this.menuBarElement = element(by.css('.wunderlist-menu-bar'));
        this.locoIconElement = element(by.css('.wunderlist-menu-bar > a'));
        this.menuDownloadElement = element(by.css(".wunderlist-menu-bar li a[href*='download']"));
        this.menuSupportElement = element(by.css(".wunderlist-menu-bar li a[href*='support']"));
        this.menuBlogElement = element(by.css(".wunderlist-menu-bar li a[href*='blog']"));
        this.loginButtonElement = element(by.css(".wunderlist-login-button"));
        this.signupButtonElement = element(by.css(".wunderlist-signup-button"));
    }
}

module.exports = MainMenu;