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
	        BUILD_NUMBER='7' 
		BUILD_URL='B'
		OX_HOST_URL='https://20.13.19.182'
	        GIT_URL='https://github.com/OX-Security-Demo/Multi-currency-management'
		GIT_COMMIT='42bc049a3b0c4f945a36ea822e0f82a46cdcba76'
		GIT_BRANCH='origin/main'
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
