# Orchestration Basics

This repo is a basic set of script for running a simple app (written with Deno but you can easily swap out your own) locally with docker, kubernetes (kind and minikube) or docker swarm just to get a feel for the differences.

The scripts are located in `scripts`.  The package.json is just for script running because it's fast and easy and I already have it installed but node is not actually used in this repo.

## The scripts

- start - starts the deno server locally on port 8080
- docker-build - builds the docker image "my-app" which contains the deno server
- docker-clean - removes the docker container and image
- docker-start - starts the deno application in the container on port 8080
- kind-init - starts up a local kind cluster and loads the deno image (must run after docker-build)
- kind-delete - deletes the local kind cluster
- minikube-init - start up a local minikube cluster
- minikube-delete - delete the local minikube cluster
- k8s-deploy - deploys to the default local kubernetes cluster (must init either kind or minikube)
- k8s-expose - exposes the deployment on port 8080
- swarm-deploy - deploys app on using docker swarm on port 8080