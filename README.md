# 🛒 ShopZone - On-Prem End-to-End E-Commerce CI/CD DevOps Project

![ShopZone](https://img.shields.io/badge/Project-ShopZone-blue)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C)
![Grafana](https://img.shields.io/badge/Grafana-Monitoring-F46800)

---

# 📌 Project Overview

**ShopZone** is a complete **On-Premise DevOps CI/CD project** that demonstrates the deployment of a modern E-commerce website on an **Ubuntu server environment using Minikube Kubernetes**.

This project implements a complete software delivery lifecycle:

* Frontend application development
* Docker containerization
* Jenkins automated CI/CD pipeline
* Kubernetes orchestration using Minikube
* Blue-Green deployment strategy
* Horizontal Pod Autoscaling
* Persistent storage management
* Application monitoring using Prometheus and Grafana

The complete infrastructure is hosted on **local On-Prem Ubuntu servers without using any public cloud platform.**

---

# 🏗️ Infrastructure Architecture

```text
Developer
    |
    |
Source Code Repository
    |
    |
Jenkins CI/CD Server
    |
    |
Docker Build & Testing
    |
    |
Docker Image
    |
    |
On-Prem Ubuntu Server
    |
    |
Minikube Kubernetes Cluster
    |
    |
+---------------------------+
|                           |
Blue Deployment        Green Deployment
v1.0                   v2.0
|                           |
+--------- Kubernetes -------+
          |
          |
       Nginx Ingress
          |
          |
      ShopZone Website


Monitoring:

Prometheus
      |
      |
Grafana Dashboard
```

---

# 🛠️ Technology Stack

## Application Development

* HTML5
* CSS3
* JavaScript

## Web Server

* Nginx

## Container Platform

* Docker
* Docker Images
* Multi-stage Docker Build

## CI/CD Automation

* Jenkins
* Jenkins Pipeline as Code

## Container Orchestration

* Kubernetes
* Minikube
* kubectl

## Infrastructure Environment

* On-Prem Ubuntu Server

## Kubernetes Components

* Namespace
* Deployment
* Service
* Ingress
* ConfigMap
* Secret
* Persistent Volume (PV)
* Persistent Volume Claim (PVC)
* Horizontal Pod Autoscaler (HPA)

## Monitoring Stack

### Prometheus

Used for:

* Kubernetes metrics collection
* Pod monitoring
* CPU monitoring
* Memory monitoring
* Application availability monitoring

### Grafana

Used for:

* Monitoring dashboards
* Resource visualization
* Application health tracking

---

# 🚀 Deployment Strategy

## Blue-Green Deployment

Implemented for:

* Zero downtime deployment
* Safer application releases
* Instant rollback capability

Deployment flow:

```
Current Production
      |
      |
 Blue Version (v1.0)

      |
      |
Deploy New Version

      |
      |
 Green Version (v2.0)

      |
      |
Traffic Switching

      |
      |
Production Release
```

---

# 📂 Project Structure

```
ShopZone/

├── frontend/
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   └── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── docker/
│   ├── Dockerfile
│   └── nginx.conf
│
├── jenkins/
│   └── Jenkinsfile
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── pv.yaml
│   ├── pvc.yaml
│   └── hpa.yaml
│
└── monitoring/

    ├── namespace.yaml

    ├── prometheus/

    │   ├── prometheus-configmap.yaml

    │   ├── prometheus-deployment.yaml

    │   └── prometheus-service.yaml

    │
    └── grafana/

        ├── grafana-deployment.yaml

        └── grafana-service.yaml
```

---

# ⚙️ Prerequisites

## Hardware Requirements

Recommended:

* CPU: Minimum 4 cores
* RAM: Minimum 8 GB
* Storage: 30 GB+

---

## Operating System

* Ubuntu 20.04 / 22.04 LTS

---

## Required Software

### Git

```bash
git --version
```

### Docker

```bash
docker --version
```

### Java

Required for Jenkins:

```bash
java --version
```

### Jenkins

* Jenkins LTS
* Pipeline Plugin

### Kubernetes CLI

```bash
kubectl version
```

### Minikube

```bash
minikube version
```

### Helm (Optional)

```bash
helm version
```
---

# 📊 Monitoring Workflow

```
ShopZone Pods

      |
      |

Prometheus

      |
      |

Metrics Collection

      |
      |

Grafana Dashboard

      |
      |

System & Application Monitoring
```

---

# 🔐 Security Features

Implemented:

* Docker image security scanning
* Kubernetes readiness probes
* Kubernetes liveness probes
* Resource limits
* Secret management
* Controlled deployment process

---

# 📌 Project Highlights

✅ Complete On-Prem DevOps Implementation
✅ No Public Cloud Dependency
✅ Automated CI/CD Pipeline
✅ Kubernetes Based Deployment
✅ Blue-Green Release Strategy
✅ Containerized Application
✅ Infrastructure Monitoring
✅ Production Style Architecture

---
---

# 👨‍💻 Project

**ShopZone - On-Prem E-Commerce CI/CD Platform**

Built using:

**Docker + Jenkins + Kubernetes + Minikube + Nginx + Prometheus + Grafana**
