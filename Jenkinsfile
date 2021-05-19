pipeline {
    environment { 
        registry = "rohith0000/writers_app"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    agent any

    stages {
    stage('Git clone') {
        steps {
            git branch: 'final', url: 'https://github.com/rohith0403/spe_finalproject.git'
            }
        }
        stage('Test') {
        steps {
            sh 'pwd'
            sh script:
            '''
            cd ./server
            npm install
            npm test
            '''
            }
        }
    // stage('Deploy') {
    //     steps {
    //         sh 'cd client'
    //         sh 'npm install'
    //         sh 'npm build'
    //         }
    //     }
        
     stage('Building Docker image'){
        steps{
            script{
            dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
    stage('Push Docker image to dockerhub'){
        steps{
            script{
                docker.withRegistry('',registryCredential){ 
                dockerImage.push("latest")
                        }
                    }
               }
        }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    
    stage('Rundeck Deploy') {
      agent any
      steps {
        script {
          step([$class: "RundeckNotifier",
          rundeckInstance: "Rundeck server",
          options: """
            BUILD_VERSION=$BUILD_NUMBER
          """,
          jobId: "77662350-eca3-46ec-b248-433010273bf0"])
        }
      }
    }

    }   
}
