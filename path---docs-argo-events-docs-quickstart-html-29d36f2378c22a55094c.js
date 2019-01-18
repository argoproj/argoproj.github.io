webpackJsonp([0xf367c3d79a2e],{583:function(e,o){e.exports={pathContext:{docHtml:'<h1>Installation</h1>\n<p>This is a guide to getting started with Argo Events.</p>\n<h2>Requirements</h2>\n<ul>\n<li>Kubernetes cluster >v1.9</li>\n<li>Installed the <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">kubectl</a> command-line tool >v1.9.0</li>\n<li>Installed Go >1.9 and properly setup the <a href="https://golang.org/doc/install">GOPATH</a> environment variable</li>\n<li>Installed <a href="https://golang.github.io/dep/docs/installation.html">dep</a>, Go\'s dependency tool</li>\n</ul>\n<h2>1. Get the project</h2>\n<pre><code>go get github.com/argoproj/argo-events\ncd $GOPATH/src/github.com/argoproj/argo-events\n</code></pre>\n<h2>2. Deploy Argo Events SA, ClusterRoles, ConfigMap, Sensor Controller and Gateway Controller</h2>\n<p>Note: Modify the <a href="../hack/k8s/manifests/argo-events-cluster-roles.yaml">argo-events-cluster-roles.yaml</a> file to use the correct namespace that you wish to deploy the sensor controller and gateway controller.</p>\n<pre><code>kubectl create namespace argo-events\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/argo-events-sa.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/argo-events-cluster-roles.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/sensor-crd.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/gateway-crd.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/sensor-controller-configmap.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/sensor-controller-deployment.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/gateway-controller-configmap.yaml\nkubectl apply -n argo-events -f https://raw.githubusercontent.com/argoproj/argo-events/guides/hack/k8s/manifests/gateway-controller-deployment.yaml\n</code></pre>\n<p><b>Note</b> If you want to use a different namespace for deployments, make sure to update namespace references\nto your-namespace in above files</p>\n<h2>3. Install Argo</h2>\n<p>Follow instructions from <a href="https://github.com/argoproj/argo/blob/master/demo.md">https://github.com/argoproj/argo/blob/master/demo.md</a></p>\n<p><b>Note</b>: Make sure to install Argo in <code>argo-events</code> namespace</p>\n<h2>4. Create a webhook gateway</h2>\n<pre><code>kubectl apply -n argo-events -f examples/gateways/webhook-gateway-configmap.yaml\nkubectl apply -n argo-events -f examples/gateways/webhook.yaml\n</code></pre>\n<h2>5. Create a webhook sensor</h2>\n<pre><code>kubectl apply -n argo-events -f examples/sensors/webhook.yaml\n</code></pre>\n<h2>6. Trigger the webhook &#x26; corresponding Argo workflow</h2>\n<p>Trigger the webhook via sending a http POST request to <code>/foo</code> endpoint. You can add different endpoint to\ngateway configuration at run time as well.\nNote: the <code>WEBHOOK_SERVICE_URL</code> will differ based on the Kubernetes cluster.</p>\n<pre><code>export WEBHOOK_SERVICE_URL=$(minikube service --url webhook-gateway-gateway-svc)\necho $WEBHOOK_SERVICE_URL\ncurl -d \'{"message":"this is my first webhook"}\' -H "Content-Type: application/json" -X POST $WEBHOOK_SERVICE_URL/foo\n</code></pre>\n<p><b>Note</b>: </p>\n<ul>\n<li>If you are facing an issue getting service url by running <code>minikube service --url webhook-gateway-gateway-svc</code>, you can use <code>kubectl port-forward</code></li>\n<li>Open another terminal window and enter <code>kubectl port-forward &#x3C;name_of_the_webhook_gateway_pod> 9003:&#x3C;port_on_which_gateway_server_is_running></code></li>\n<li>You can now user <code>localhost:9003</code> to query webhook gateway</li>\n</ul>\n<p>Verify that the Argo workflow was run when the trigger was executed.</p>\n<pre><code>argo list\n</code></pre>\n<p>Verify that the sensor was updated correctly and moved to a "Complete" phase.</p>\n<pre><code>kubectl get sensor webhook-sensor -o yaml\n</code></pre>\n<p>Check the logs of the sensor-controller pod, gateway-controller, associated gateways and sensors if there are problems.</p>\n<h2>7. Next steps</h2>\n<ul>\n<li><a href="tutorial.html">Follow tutorial on gateways and sensors</a></li>\n<li>Write your first gateway. Follow the tutorial <a href="custom-gateway.html">Custom Gateways</a>.</li>\n</ul>',docPath:"argo-events/docs/quickstart",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-docs-quickstart-html-29d36f2378c22a55094c.js.map