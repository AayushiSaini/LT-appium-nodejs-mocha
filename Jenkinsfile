pipeline {
    agent any
    environment {
        // LambdaTest Credentials (ID exactly same honi chahiye jo Jenkins mein save ki hai)
        LT_USERNAME = credentials('LT_USER')
        LT_ACCESS_KEY = credentials('LT_KEY')
        
        // Mac ka Path jahan Node aur NPM install hain
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
    }
    stages {
        stage('Setup') {
            steps {
                echo 'Installing dependencies...'
                // 'npm install' use kar rahe hain taaki agar lock file miss ho toh ye khud bana le
                sh 'npm install'
            }
        }
        stage('Execution') {
            steps {
                echo 'Running Parallel iOS Tests on LambdaTest...'
                // Ye wahi command hai jo aapne package.json mein set ki hai
                sh 'npm run parallel_ios'
            }
        }
    }
    post {
        always {
            echo 'Build Process Completed.'
        }
    }
}
