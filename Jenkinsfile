node {
  stage ('Build') {
    checkout scm

    // https://issues.jenkins-ci.org/browse/JENKINS-37658
    // manually clean after checkout
    sh 'git clean -xfd'

    // Install dependencies
    sh 'npm install'
  }

  stage ('Test') {
    // Add sauce credentials
    sauce('f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a') {
      // Start sauce connect
      sauceconnect(options: '', useGeneratedTunnelIdentifier: false, verboseLogging: false) {

      }
    }
  }
}
