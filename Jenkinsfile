pipeline{
    agent any
    tools {nodejs "my-nodejs"}
    stages{
        stage("Build"){
            steps{
                nodejs("my-nodejs") {
                    sh 'npm install'
                }
            }
        }
    }
}
