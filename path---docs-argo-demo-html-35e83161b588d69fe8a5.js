webpackJsonp([0xb735025ee559],{507:function(e,o){e.exports={pathContext:{docHtml:"<h1>Argo Getting Started</h1>\n<p>To see how Argo works, you can run examples of simple workflows and workflows that use artifacts. For the latter, you'll set up an artifact repository for storing the artifacts that are passed in the workflows. Here are the requirements and steps to run the workflows.</p>\n<h2>Requirements</h2>\n<ul>\n<li>Installed Kubernetes 1.8 or later</li>\n<li>Installed the <a href=\"https://kubernetes.io/docs/tasks/tools/install-kubectl/\">kubectl</a> command-line tool</li>\n<li>Have a <a href=\"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/\">kubeconfig</a> file (default location is <code>~/.kube/config</code>).</li>\n</ul>\n<h2>1. Download Argo</h2>\n<p>On Mac:</p>\n<pre><code>$ brew install argoproj/tap/argo\n</code></pre>\n<p>On Linux:</p>\n<pre><code>$ curl -sSL -o /usr/local/bin/argo https://github.com/argoproj/argo/releases/download/v2.1.0/argo-linux-amd64\n$ chmod +x /usr/local/bin/argo\n</code></pre>\n<h2>2. Install the Controller and UI</h2>\n<pre><code>$ argo install\n</code></pre>\n<p>NOTE:</p>\n<ul>\n<li>\n<p>On GKE with RBAC enabled, you may need to grant your account the ability to create new cluster roles</p>\n<pre><code>$ kubectl create clusterrolebinding YOURNAME-cluster-admin-binding --clusterrole=cluster-admin --user=YOUREMAIL@gmail.com\n</code></pre>\n</li>\n<li>The subsequent instructions below assume the installation of argo into the <code>kube-system</code> namespace (the default behavior). A different namespace can be chosen using the <code>argo install --namespace &#x3C;name></code> flag, in which case you should substitute <code>kube-system</code> with your chosen namespace in the examples below.</li>\n</ul>\n<h2>3. Configure the service account to run workflows (required for RBAC clusters)</h2>\n<p>For clusters with RBAC enabled, the 'default' service account is too limited to do any kind of meaningful work. Run the following command to grant admin privileges to the 'default' service account in the namespace 'default':</p>\n<pre><code>$ kubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=default:default\n</code></pre>\n<p>NOTE: You can also submit workflows using a different service account using the <code>argo submit --serviceaccount &#x3C;name></code> flag.</p>\n<h2>4. Run Simple Example Workflows</h2>\n<pre><code>$ argo submit https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\n$ argo submit https://raw.githubusercontent.com/argoproj/argo/master/examples/coinflip.yaml\n$ argo submit https://raw.githubusercontent.com/argoproj/argo/master/examples/loops-maps.yaml\n$ argo list\n$ argo get xxx-workflow-name-xxx\n$ argo logs xxx-pod-name-xxx #from get command above\n</code></pre>\n<p>You can also run workflows directly with kubectl. However, the Argo CLI offers extra features that kubectl does not, such as YAML validation, workflow visualization, and overall less typing.</p>\n<pre><code>$ kubectl create -f https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\n$ kubectl get wf\n$ kubectl get wf hello-world-xxx\n$ kubectl get po --selector=workflows.argoproj.io/workflow=hello-world-xxx --show-all\n$ kubectl logs hello-world-yyy -c main\n</code></pre>\n<p>Additional examples are availabe <a href=\"https://github.com/argoproj/argo/blob/master/examples/README.html\">here</a>.</p>\n<h2>5. Install an Artifact Repository</h2>\n<p>Argo supports S3 (AWS, GCS, Minio) as well as Artifactory as artifact repositories. This tutorial uses Minio for the sake of portability. Instructions on how to configure other artifact repositories are <a href=\"https://github.com/argoproj/argo/blob/master/ARTIFACT_REPO.html\">here</a>.</p>\n<pre><code>$ brew install kubernetes-helm # mac\n$ helm init\n$ helm install stable/minio --name argo-artifacts --set service.type=LoadBalancer\n</code></pre>\n<p>Login to the Minio UI using a web browser (port 9000) after exposing obtaining the external IP using <code>kubectl</code>.</p>\n<pre><code>$ kubectl get service argo-artifacts-minio -o wide\n</code></pre>\n<p>On Minikube:</p>\n<pre><code>$ minikube service --url argo-artifacts-minio\n</code></pre>\n<p>NOTE: When minio is installed via Helm, it uses the following hard-wired default credentials,\nwhich you will use to login to the UI:</p>\n<ul>\n<li>AccessKey: AKIAIOSFODNN7EXAMPLE</li>\n<li>SecretKey: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</li>\n</ul>\n<p>Create a bucket named <code>my-bucket</code> from the Minio UI.</p>\n<h2>6. Reconfigure the workflow controller to use the Minio artifact repository</h2>\n<p>Edit the workflow-controller config map to reference the service name (argo-artifacts-minio) and secret (argo-artifacts-minio) created by the helm install:</p>\n<pre><code>$ kubectl edit configmap workflow-controller-configmap -n kube-system\n...\n    executorImage: argoproj/argoexec:v2.1.0\n    artifactRepository:\n      s3:\n        bucket: my-bucket\n        endpoint: argo-artifacts-minio.default:9000\n        insecure: true\n        # accessKeySecret and secretKeySecret are secret selectors.\n        # It references the k8s secret named 'argo-artifacts-minio'\n        # which was created during the minio helm install. The keys,\n        # 'accesskey' and 'secretkey', inside that secret are where the\n        # actual minio credentials are stored.\n        accessKeySecret:\n          name: argo-artifacts-minio\n          key: accesskey\n        secretKeySecret:\n          name: argo-artifacts-minio\n          key: secretkey\n</code></pre>\n<p>The Minio secret is retrived from the namespace you use to run workflows. If Minio is installed in a different namespace then you will need to create a copy of its secret in the namespace you use for workflows.</p>\n<h2>7. Run a workflow which uses artifacts</h2>\n<pre><code>$ argo submit https://raw.githubusercontent.com/argoproj/argo/master/examples/artifact-passing.yaml\n</code></pre>\n<h2>8. Access the Argo UI</h2>\n<p>By default, the Argo UI service is not exposed with an external IP. To access the UI, use one of the following methods:</p>\n<h4>Method 1: kubectl port-forward</h4>\n<p>Run:</p>\n<pre><code>$ kubectl port-forward $(kubectl get pods -n kube-system -l app=argo-ui -o jsonpath='{.items[0].metadata.name}') -n kube-system 8001:8001\n</code></pre>\n<p>Then visit: <a href=\"http://127.0.0.1:8001/\">http://127.0.0.1:8001/</a></p>\n<h4>Method 2: kubectl proxy</h4>\n<p>Run:</p>\n<pre><code>$ kubectl proxy\n</code></pre>\n<p>Then visit: <a href=\"http://127.0.0.1:8001/api/v1/proxy/namespaces/kube-system/services/argo-ui/\">http://127.0.0.1:8001/api/v1/proxy/namespaces/kube-system/services/argo-ui/</a></p>\n<p>NOTE: artifact download and webconsole is not supported using this method</p>\n<h4>Method 3: Use a LoadBalancer</h4>\n<p>Update the argo-ui service to be of type <code>LoadBalancer</code>.</p>\n<pre><code>$ kubectl patch svc argo-ui -n kube-system -p '{\"spec\": {\"type\": \"LoadBalancer\"}}'\n</code></pre>\n<p>Then wait for the external IP to be made available:</p>\n<pre><code>$ kubectl get svc argo-ui -n kube-system\nNAME      TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE\nargo-ui   LoadBalancer   10.19.255.205   35.197.49.167   80:30999/TCP   1m\n</code></pre>\n<p>NOTE: On Minikube, you won't get an external IP after updating the service -- it will always show <code>pending</code>. Run the following command to determine the Argo UI URL:</p>\n<pre><code>$ minikube service -n kube-system --url argo-ui\n</code></pre>",docPath:"argo/demo",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-demo-html-35e83161b588d69fe8a5.js.map