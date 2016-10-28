var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['guineaPig'],

    'Guinea Pig Assert Title 1 - A': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 1 - B': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 1 - C': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 1 - D': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 1 - E': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 1 - Suite Completed': function(client) {
        // No assertion needed
    },

    afterEach: function(client, done) {
        client.customSauceEnd(done);
    }

};
