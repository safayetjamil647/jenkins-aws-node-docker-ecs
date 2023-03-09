pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/safayetjamil647/jenkins-aws-node-docker-ecs']]])            

          }
        }
        
        stage ("terraform init") {
            steps {
                sh ('terraform init -reconfigure') 
            }
        }
        
        stage ("terraform Action") {
            steps {
                sh ('terraform apply') 
           }
        }
    }
}