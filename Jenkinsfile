pipeline {
    agent any
    environment {
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
    }
    stages {
        stage('Setup') {
            steps {
                // Fresh install with legacy peer deps to avoid any version drama
                sh 'npm install --legacy-peer-deps'
            }
        }
        stage('Execution') {
            steps {
                // Ab hum direct package.json wali script chalayenge
                sh 'npm run parallel_ios'
            }
        }
    }
}
