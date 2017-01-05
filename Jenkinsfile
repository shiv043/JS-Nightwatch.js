node {
  stage ('Build') {
    checkout scm

    // https://issues.jenkins-ci.org/browse/JENKINS-37658
    // manually clean after checkout
    sh 'gir clean -xfd'

    // Install dependencies
    sh 'npm install'
  }

  stage ('Test') {

  }
}
