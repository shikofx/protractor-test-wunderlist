var inputData = require('../../../data/dataForTests.json').valid;
const MainPage = require('../pages/mainPage');
const QuestionPage = require('../pages/questionPage');
const SupportPage = require('../pages/supportPage');

let mainPage, supportPage, questionPage;

xdescribe('Wunderkinder Contact to support page ', function() {
    beforeAll(() => {
        mainPage = new MainPage();
        supportPage = new SupportPage();
        questionPage = new QuestionPage();
        mainPage.navigate();
        mainPage.goToSupport();
        supportPage.goToQuestionPage();
    });
    
    browser.ignoreSynchronization = true;

    it('should have title', () => {
        expect(questionPage.getPageTitle()).toEqual(questionPage.questionPageTitleText);
    });
    
    it('should have URL', () => {
        expect(questionPage.getPageUrl()).toEqual(questionPage.url)
    });
    
    it('should have question section text', () => {
        expect(questionPage.getQuestionSectionTitleText()).toEqual(questionPage.questionSectionTitleText);
    });
});

