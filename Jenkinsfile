pipeline {
    agent any
    parameters {
        choice(name: 'TEST_TYPE', choices: ['parallel_ios', 'parallel_android', 'ios', 'android'], description: 'Kaunsa test run karna hai?')
    }
    environment {
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
    }
    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Execution') {
            steps {
                // Ye command dynamic ho jayegi parameters ke hisaab se
                sh "CONFIG_FILE=${params.TEST_TYPE} ./node_modules/.bin/mocha specs/${params.TEST_TYPE}_test.js conf/${params.TEST_TYPE}.conf.js --timeout=300000"
            }
        }
    }
}
