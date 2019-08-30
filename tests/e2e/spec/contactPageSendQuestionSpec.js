var validData = require('../data/contactPageData.json').valid;
var withoutNameData = require('../data/contactPageData.json').withoutName;
const QuestionPage = require('../pages/questionPage');

let mainPage, supportPage, questionPage;

describe('Wunderkinder after fill data', function() {

    beforeAll(() => {
        questionPage = new QuestionPage();
        questionPage.navigate();
    });
    
    beforeEach(() => {
        questionPage.update();
    });

    browser.ignoreSynchronization = true;

    it('should be success with valid data', () => {
        questionPage.fillData(validData);
        questionPage.unfocus();
        expect(questionPage.nameSuccess()).toEqual(true);
        expect(questionPage.emailSuccess()).toEqual(true);
        expect(questionPage.subjectSuccess()).toEqual(true);
        expect(questionPage.questionSuccess()).toEqual(true);
    });

    it('should be error name without name in data', () => {
        questionPage.fillData(withoutNameData);
        questionPage.unfocus();
        expect(questionPage.nameSuccess()).toEqual(false);
        expect(questionPage.emailSuccess()).toEqual(true);
        expect(questionPage.subjectSuccess()).toEqual(true);
        expect(questionPage.questionSuccess()).toEqual(true);
    });
});
    