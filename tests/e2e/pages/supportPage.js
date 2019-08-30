'use strict'

const BasePage = require('./basePage');
const PageProvider = require('./pageProvider');

class SupportPage extends BasePage {
    constructor(){
        super();
        this.url = 'https://6wunderkinder.desk.com/';
        this.sideBar = element(by.css("#sidebar"));
        this.questionNew = element(by.css("#sidebar a[href*=questions]"));
    }

    goToQuestionPage(){
        this.questionNew.click()
            .then(() => {
                return PageProvider.goToPage('questionPage')
            });
    }

}

module.exports = SupportPage;