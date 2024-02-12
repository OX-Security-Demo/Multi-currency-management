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
	        NODE_TLS_REJECT_UNAUTHORIZED = 0
		JENKINS_HOME=true
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
