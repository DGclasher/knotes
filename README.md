# Knotes

## Description

Knotes is a simple note taking application meant for testing kubernetes orchestration

### Docker image [here](https://hub.docker.com/repository/docker/dgclasher/knotes/general)

## Deployment in Kubernetes

### You would need [minikube](https://minikube.sigs.k8s.io/docs/start/), [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) and [docker](https://docs.docker.com/engine/install/) in order to create a cluster

### Clone the `kuber` branch of this repo which contains the deployment configuration
```
git clone https://github.com/DGclasher/knotes --branch kuber
```

### Start minikube
```
minikube start
```

### Export the variables and create pods
```
export KNOTES_MONGO_URL="< MongoDB URL to connect >"
```
```
cd kuber; envsubst < deployment.yaml | kubectl apply -f -
```

### Watch the pods baking up
```
kubectl get pods --watch
```

### Access the Application
```
minikube service knotes --url
```

