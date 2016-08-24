module.exports = {

    '@tags': ['guineaPig'],

    'Guinea Pig Assert Title 0 - A': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 0 - B': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 0 - C': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 0 - D': function(client) {
        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Guinea Pig Assert Title 0 - E': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    afterEach: function(client, done) {
        client.customSauceEnd(done);
    }

};
