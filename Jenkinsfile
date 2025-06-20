pipeline {
  agent {
    docker {
      image 'node:20'
      args '-u root:root'
    }
  }

  environment {
    CI = 'true'
    BASE_HREF = 'https://OwenOps.github.io/MyPortfolio/'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Angular CLI') {
      steps {
        sh 'npm install -g @angular/cli@19 angular-cli-ghpages'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build Angular') {
      steps {
        sh 'ng build --base-href="${BASE_HREF}" --configuration=production'
      }
    }

    stage('Deploy to GitHub Pages') {
      steps {
        withCredentials([string(credentialsId: 'github-token', variable: 'GH_TOKEN')]) {
          sh '''
            git config --global user.email "you@example.com"
            git config --global user.name "Jenkins CI"

            npx angular-cli-ghpages --dir=dist/MyPortfolio/browser/ --repo=https://$GH_TOKEN@github.com/OwenOps/MyPortfolio.git
          '''
        }
      }
    }
  }

  post {
    success {
      echo 'Site déployé sur GitHub Pages avec succès !'
    }
    failure {
      echo 'Une erreur est survenue lors du build ou du déploiement.'
    }
  }
}
