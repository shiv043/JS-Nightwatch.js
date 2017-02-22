pipeline {
    agent any
    options {
        // Nightwatch.js supports color ouput, so wrap add his option
        ansiColor colorMapName: 'XTerm'
    }
    environment {
        saucelabsCredentialId = 'f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a'
        sauceTestList = 'tests/guineaPig.js'
        platformConfigs = 'chrome,firefox,ie,edge'
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
                // Add sauce credentials
                sauce(saucelabsCredentialId) {
                    // Start sauce connect
                    sauceconnect() {
                        // Run selenium tests using Nightwatch.js
                        // Ignore error codes. The junit publisher will cover setting build status.
                        sh "./node_modules/.bin/nightwatch -e ${platformConfigs} --test ${sauceTestList} || true"
                    }
                }
            }
            post {
                always {
                    step([$class: 'XUnitBuilder',
                        thresholds: [
                            [$class: 'SkippedThreshold', failureThreshold: '0'],
                            // Allow for a significant number of failures
                            // Keeping this threshold so that overwhelming failures are guaranteed
                            //     to still fail the build
                            [$class: 'FailedThreshold', failureThreshold: '10']],
                        tools: [[$class: 'JUnitType', pattern: 'reports/**']]])

                    saucePublisher()
                }
            }
        }
        stage ('Deploy') {
    when {
        branch 'master'
    }
    steps {
         echo 'Placeholder for deploy steps.'
    }
}
    }
}
