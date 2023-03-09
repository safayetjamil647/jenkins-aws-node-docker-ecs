pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }
    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/safayetjamil647/jenkins-aws-node-docker-ecs']]])            

          }
        }
        
        stage ("terraform init") {
            steps {
                sh ('terraform init') 
            }
        }

        stage ("terraform Action") {
            steps {
                sh ('terraform apply -input=false') 
           }
        }
    }
}