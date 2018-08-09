webpackJsonp([0xf367c3d79a2e],{513:function(e,o){e.exports={pathContext:{docHtml:'<h1>Getting Started - Quickstart</h1>\n<p>This is a guide to getting started with Argo Events using Minikube.</p>\n<h2>Requirements</h2>\n<ul>\n<li>Installed the <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">kubectl</a> command-line tool >v1.9.0</li>\n<li>Have a <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/">kubeconfig</a> file (default location is <code>~/.kube/config</code>).</li>\n<li>Installed Minikube >v0.26.1</li>\n<li>Installed Go >1.9 and properly setup the <a href="https://golang.org/doc/install">GOPATH</a></li>\n<li>Installed <a href="https://golang.github.io/dep/docs/installation.html">dep</a>, Go\'s dependency tool</li>\n</ul>\n<h2>1. Checkout project\'s master branch</h2>\n<pre><code>$ git clone git@github.com:argoproj/argo-events.git\n</code></pre>\n<h2>2. Install vendor dependencies</h2>\n<pre><code>$ dep ensure -vendor-only\n</code></pre>\n<h2>3. Start Minikube</h2>\n<pre><code>$ minikube start\n</code></pre>\n<h2>4. Point Docker Client to Minikube\'s Docker Daemon</h2>\n<pre><code>$ eval $(minikube docker-env)\n</code></pre>\n<h2>5. Build the project &#x26; Docker images</h2>\n<pre><code>$ cd go/src/github.com/argoproj/argo-events\n$ make all\n</code></pre>\n<h2>6. Deploy Argo Events SA, ClusterRoles, ConfigMap, and Sensor Controller</h2>\n<p>Note 1: This process is manual right now, but we\'re working on providing a Helm chart or integrating as a Ksonnet application\nNote 2: Modify the <a href="../hack/k8s/manifests/argo-events-cluster-roles.yaml">argo-events-cluster-roles.yaml</a> file to use the correct namespace that you wish to deploy the sensor controller + signal microservices.</p>\n<pre><code>$ k apply -f hack/k8s/manifests/argo-events-sa.yaml\n$ k apply -f hack/k8s/manifests/argo-events-cluster-roles.yaml\n$ k apply -f hack/k8s/manifests/sensor-crd.yaml\n$ k apply -f hack/k8s/manifests/sensor-controller-configmap.yaml\n$ k apply -f hack/k8s/manifests/sensor-controller-deployment.yaml\n</code></pre>\n<h2>7. Deploy Argo Events Webhook Signal Microservice</h2>\n<p>Note: You will need to separately deploy the various signal services that you wish to support.</p>\n<pre><code>$ k apply -f hack/k8s/manifests/services/webhook.yaml\n</code></pre>\n<h2>8. Install Argo</h2>\n<p>Follow instructions from <a href="https://github.com/argoproj/argo/blob/master/demo.html">https://github.com/argoproj/argo/blob/master/demo.md</a></p>\n<h2>9. Create a webhook sensor</h2>\n<pre><code>$ k apply -f examples/webhook-with-resource-param.yaml\n</code></pre>\n<p>Verify that the sensor was created.</p>\n<pre><code>$ kubectl get sensors -n default\n</code></pre>\n<p>Verify that the signal microservice is listening for signals and the sensor is active.</p>\n<pre><code>$ kubectl logs signal-webhook-xxx -f\n$ kubectl get sensor webhook-with-resource-param -n default -o yaml\n</code></pre>\n<h2>10. Trigger the webhook &#x26; corresponding Argo workflow</h2>\n<p>Trigger the webhook via sending a POST with a JSON with a "message" key and value.\nEnsure that you set the header "Content-Type" to "application/json" or this event will be ignored.</p>\n<pre><code>$ curl -d \'{"message":"this is my first webhook"}\' -H "Content-Type: application/json" -X POST $(minikube service --url webhook)\n</code></pre>\n<p>Verify that the Argo workflow was run when the trigger was executed.</p>\n<pre><code>$ argo list\n</code></pre>\n<p>Verify that the sensor was updated correctly and moved to a "Complete" phase</p>\n<pre><code>$ kubectl get sensor webhook-with-resource-param -n default -o yaml\n</code></pre>\n<p>Check the logs of the Argo workflow pod for the message you posted.</p>\n<pre><code>$ k logs arguments-via-webhook-event main\n</code></pre>\n<p>Check the logs of the sensor-controller pod or the associated signal microservice if there are problems.</p>',docPath:"argo-events/docs/quickstart",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-docs-quickstart-html-9d8ff2c72c7e9829402b.js.map