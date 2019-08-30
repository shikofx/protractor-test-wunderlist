'use strict'

const BasePage = require('./basePage');
const PageProvider = require('./pageProvider');

class NewQuestionPage extends BasePage{

    constructor(){
        super();
        this.url = 'https://6wunderkinder.desk.com/customer/portal/questions/new';
        this.questionPageTitleText = 'Wunderlist Support Center | Post a Public Question';
        this.questionPageUrl = 'https://6wunderkinder.desk.com/customer/portal/questions/new';
        
        this.questionSectionTitleText = 'Post a Public Question';
        this.questionSectionTitle = element(by.css('div.header h2'));
        
        this.fieldsTitles = element.all(by.css('.panel-body .form-group'));
        
        this.topicTitle = element(by.xpath("//*[@id='qna_kb_topic_id']/parent::div"));
        this.topicSelector = element(by.css('#qna_kb_topic_id'));
        
        this.nameTitle = element(by.xpath("//*[@id='interaction_name']/parent::div"));
        this.nameField = element(by.css('#interaction_name'));
        
        this.emailTitle = element(by.xpath("//*[@id='interaction_email']/parent::div"));
        this.emailField = element(by.css('#interaction_email'));
        
        this.subjectTitle = element(by.xpath("//*[@id='qna_subject']/parent::div"));
        this.subjectField = element(by.css('#qna_subject'));
        
        this.quetionTitle = element(by.xpath("//*[@id='qna_body']/parent::div"));
        this.questionField = element(by.css('#qna_body'));
        
        this.autosuggestedSection = element(by.css('#sidebar .autosuggest')); 
        this.autosuggestedItems = element.all(by.css('#sidebar .autosuggest li a')); 
        
        this.submitButton = element(by.css('#email_submit'));
    }
    
    getQuestionSectionTitleText(){
        return this.questionSectionTitle.getText();
    }

    fillData(data) {
        this.topicSelector.click().sendKeys(data.topic);
        this.nameField.click().sendKeys(data.yourName);
        this.emailField.click().sendKeys(data.yourEmail);
        this.subjectField.click().sendKeys(data.subject);
        this.questionField.click().sendKeys(data.question);
    }

    submit() {
        this.submit.click()
    }

    nameSuccess(){
        return this.nameTitle.getAttribute('class')
            .then((text) => {
                return text.includes('success');
            });
    }

    emailSuccess(){
        return this.emailTitle.getAttribute('class')
            .then((text) => {
                return text.includes('success');
            });
    }

    subjectSuccess(){
        return this.subjectTitle.getAttribute('class')
            .then((text) => {
                return text.includes('success');
            });
    }

    questionSuccess(){
        return this.quetionTitle.getAttribute('class')
            .then((text) => {
                return text.includes('success');
            });
    }
}

module.exports = NewQuestionPage;