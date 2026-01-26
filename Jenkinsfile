pipeline {
    agent any
    environment {
        // LambdaTest Credentials from Jenkins Store
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
        // Path to find npm/node on your Mac
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
    }
    stages {
        stage('Setup') {
            steps {
                // 'npm ci' exact versions install karega package-lock.json se
                sh 'npm ci'
            }
        }
        stage('Execution') {
            steps {
                // package.json mein jo script likhi hai vahi chalegi
                sh 'npm run parallel_ios'
            }
        }
    }
}
