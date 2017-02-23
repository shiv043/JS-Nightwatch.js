@Library('bitwiseman-shared@blog/declarative/sauce') _

pipeline {
    agent any
    options {
        // Nightwatch.js supports color ouput, so wrap add his option
        ansiColor colorMapName: 'XTerm'
    }
    environment {
        saucelabsCredentialId = 'f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a'
        sauceTestFilter = 'tests/guineaPig.js'
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
                sauceNightwatch saucelabsCredentialId,
                    platformConfigs,
                    sauceTestFilter
            }
            post {
                always {
                    xUnitPublishResults 'reports/**',
                        /* failWhenSkippedExceeds */ 0,
                        /* failWhenFailedExceeds */ 10

                    saucePublisher()
                }
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
