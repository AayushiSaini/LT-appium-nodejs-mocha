pipeline {
    agent any
    environment {
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
        // Is line se Jenkins ko npm mil jayega
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
    }
    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Execution') {
            steps {
                // Aapka purana mocha command
                sh './node_modules/.bin/mocha specs/parallel_ios_test.js conf/parallel_ios.conf.js --timeout=300000'
            }
        }
    }
}
