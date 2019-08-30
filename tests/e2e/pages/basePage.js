'use stict'

class BasePage{
    constructor() {
        this.url = '';
    }

    navigate () {
        return browser.get(this.url);
    }

    getPageTitle(){
        return browser.getTitle();
    }

    getPageUrl(){
        return browser.getCurrentUrl();
    }

    unfocus(){
        this.milk = element(by.css('#content'));
        this.milk.click();
    }

    update() {
        return browser.refresh();
    }
}

module.exports = BasePage;