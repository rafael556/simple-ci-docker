pipeline {
    agent any

  stages {
    stage('Fetch code') {
      steps {
        git branch: 'main', url: 'https://github.com/rafael556/simple-ci-docker.git'
      }
    }

        stage('build') {
      steps {
        sh 'npm install'
      }
        }

    stage('Test') {
      steps {
        sh 'npm run test:unit'
      }
    }

        stage('analysis') {
      environment {
        scannerHome = tool 'sonar'
      }
      steps {
        withSonarQubeEnv('sonar') {
          sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=media-ex \
            -Dsonar.projectName=media-ex \
            -Dsonar.projectVersion=1.0
          '''
        }
      }
        }

        stage('Quality Gate') {
          steps {
            timeout(time: 1, unit: 'HOURS') {
          // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
          // true = set pipeline to UNSTABLE, false = don't
          waitForQualityGate abortPipeline: true
            }
          }
        }

        stage('Build Docker image') {
      steps {
        script {
          docker.build('rafael556/media:latest', '-f Dockerfile .')
        }
      }
        }
    stage('Push Docker image') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'hub-id') {
            dockerImage.push()
          }
        }
      }
    }
  }
}
