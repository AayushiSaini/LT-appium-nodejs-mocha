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
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm install'
            }
        }
        stage('Test Execution') {
            parallel {
                stage('iOS Tests') {
                    steps {
                        echo "Starting iOS Parallel Tests..."
                        sh 'npm run parallel_ios'
                    }
                }
                stage('Android Tests') {
                    steps {
                        echo "Starting Android Parallel Tests..."
                        sh 'npm run parallel_android'
                    }
                }
            }
        }
    }
    post {
        always {
            echo "Build Process Completed."
        }
    }
}
