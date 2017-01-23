pipeline {
    agent any
    options {
        // Nightwatch.js supports color ouput, so wrap add his option
        ansiColor colorMapName: 'XTerm'
    }
    stages {
        stage ("Build") {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage ("Test") {
            steps {
                testWithSauceConnect()
            }
        }
    }
    post {
        always {
            junit 'reports/**'
            step([$class: 'SauceOnDemandTestPublisher'])
        }
    }

    script {
        // Have to wrap sauceconnect in a script block
        // https://issues.jenkins-ci.org/browse/JENKINS-41236
        def testWithSauceConnect() {
            // Add sauce credentials
            sauce('f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a') {
                // Start sauce connect
                sauceconnect(options: '', useGeneratedTunnelIdentifier: false, verboseLogging: false) {
                    // List of browser configs we'll be testing against.
                    def platform_configs = [
                        'chrome',
                        'firefox',
                        'ie',
                        'edge'
                    ].join(',')

                    // Run selenium tests using Nightwatch.js
                    // Ignore error codes. The junit publisher will cover setting build status.
                    sh "./node_modules/.bin/nightwatch -e ${platform_configs} --test tests/guineaPig.js || true"
                }
            }
        }
    }
}
