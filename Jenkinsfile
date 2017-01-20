pipeline {
    agent any
    stages {
        stage ("Example") {
            steps {
                // Install dependencies
                sh 'npm install'
                echo 'Execute build that creates artifacts'
                echo 'Execute step that fails the expected junit test file'
            }
        }
    }
    post {
        always {
            junit 'reports/**'
            archive '**'
        }
    }
}
