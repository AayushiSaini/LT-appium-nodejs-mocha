pipeline {
    agent any
    environment {
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
    }
    stages {
        stage('Cleanup & Setup') {
            steps {
                // Purana kachra saaf karke fresh install
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm install'
            }
        }
        stage('Execution') {
            steps {
                sh 'npm run parallel_ios'
            }
        }
    }
}
