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
                testWithSauceConnect {
                    // Run selenium tests using Nightwatch.js
                    // Ignore error codes. The junit publisher will cover setting build status.
                    sh './node_modules/.bin/nightwatch -e ' +
                        ['chrome','firefox','ie','edge'].join(',') +
                        ' --test tests/guineaPig.js || true'

                    // {
                    //     // List of browser configs we'll be testing against.
                    //     def platform_configs = [
                    //         'chrome',
                    //         'firefox',
                    //         'ie',
                    //         'edge'
                    //     ].join(',')
                    //
                    //     // Run selenium tests using Nightwatch.js
                    //     // Ignore error codes. The junit publisher will cover setting build status.
                    //     sh "./node_modules/.bin/nightwatch -e ${platform_configs} --test tests/guineaPig.js || true"
                    // }
                }
                echo 'hello2'
            }
        }
    }
    post {
        always {
            junit 'reports/**'
            step([$class: 'SauceOnDemandTestPublisher'])
        }
    }
}
