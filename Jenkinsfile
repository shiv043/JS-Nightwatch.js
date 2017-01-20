pipeline {
    agent any
    stages {
        stage ("Build") {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage ("Test") {
            steps {
//              script {
                // Add sauce credentials
                sauce('f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a') {
                    // Start sauce connect
                    sauceconnect(options: '', useGeneratedTunnelIdentifier: false, verboseLogging: false) {

                    }
                }
//              }
            }
        }
    }
}
