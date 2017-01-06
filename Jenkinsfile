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
        // Nightwatch.js supports color ouput, so wrap this step for ansi color
        wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
          // Run selenium tests using Nightwatch.js
          // Ignore error codes. The junit publisher will cover setting build status.
          // Only run passing tests
          sh './node_modules/.bin/nightwatch -e chrome  --test tests/guineaPig.js || true'
        }

        junit 'reports/**'

        step([$class: 'SauceOnDemandTestPublisher'])
      }
    }
  }
}
