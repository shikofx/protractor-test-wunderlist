'use strict'

const MainMenu = require('./common/mainMenu');
const BasePage = require('./basePage');
const PageProvider = require('./pageProvider');

class MainPage extends BasePage{

    constructor(){
        super();
        this.url = 'https://www.wunderlist.com/';
        this.mainMenu = new MainMenu();
    }

    goToSupport(){
        this.mainMenu.menuSupportElement.click()
            .then(() => {
                return PageProvider.goToPage('supportPage')
            });
    }

}

module.exports = MainPage;