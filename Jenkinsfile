pipeline {
    agent any
    stages {
        stage('OX Security Scan') {
            agent {
                docker {
                    alwaysPull true
                    image 'oxsecurity/ox-block-mode:latest'
                }
            }
            environment {
                OX_API_KEY = credentials('ox-api-key-test')
		            // OX_OVERRIDE_BLOCKING = false
                // OX_TIMEOUT = 20
                // OX_FAIL_ON_TIMEOUT = false
                // OX_FAIL_ON_ERROR = false
            }
            steps {
                script {
                    sh 'ox-block-mode'
                }
            }
        }
    }
}
