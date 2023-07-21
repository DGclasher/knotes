# Knotes

## Description

Knotes is a simple note taking application meant for testing kubernetes orchestration

## Deployment in Kubernetes

+ You would need [minikube](https://minikube.sigs.k8s.io/docs/start/), [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) and [docker](https://docs.docker.com/engine/install/) in order to create a cluster

+ Get the deployment configuration
  ```
  wget https://github.com/DGclasher/knotes/raw/kuber/deployment.yaml
  ```

+ Start minikube
  ```
  minikube start
  ```

+ Export the variables and create pods
  ```
  export KNOTES_MONGO_URL="< MongoDB URL to connect >"
  ```
  ```
  envsubst < deployment.yaml | kubectl apply -f -
  ```

+ Watch the pods baking up
  ```
  kubectl get pods --watch
  ```

+ Access the Application
  ```
  minikube service knotes --url
  ```
  