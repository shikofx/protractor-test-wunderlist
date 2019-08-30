var PAGE_MAP = {
    "mainPage": "./mainPage.js",
    "supportPage": "./supportPage.js",
    "questionPage": "./questionPage.js"
};

module.exports.goToPage = (pageName) => {
    return require(PAGE_MAP[pageName]);
}