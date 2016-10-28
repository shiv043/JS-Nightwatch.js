var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['guineaPig'],

    'Guinea Pig Flaky Assert Title': function(client) {
        var expectedTitle = 'I am a page title - Sauce Labs';
        // Fail every fifth minute
        if (Math.floor(Date.now() / (1000 * 60)) % 5 === 0) {
            expectedTitle += " - Cause failure";
        }

        client
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title(expectedTitle);
    },

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
