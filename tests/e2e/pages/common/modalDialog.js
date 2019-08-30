'use strict'

class ModalDialog {
    constructor() {
        this.dialogForm = element(by.css('.modal-dialog.modal-lg'));
        this.dialogHeader = element(by.css('.modal-content .modal-header h1'));
        this.dialogHeaderText = 'Your post is being submitted to a moderator';
        this.submitButton = element(by.css(".modal-content [type=submit]"));
    }

    submitModalDialog(){
        this.submitButton.click();
    }
}