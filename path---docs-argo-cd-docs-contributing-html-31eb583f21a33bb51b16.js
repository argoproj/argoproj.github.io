webpackJsonp([24292764949769],{554:function(e,o){e.exports={pathContext:{docHtml:'<h1>Contributing</h1>\n<h2>Before You Start</h2>\n<p>You must install and run the ArgoCD using a local Kubernetes (e.g. Docker for Desktop or Minikube) first. This will help you understand the application, but also get your local environment set-up.</p>\n<p>Then, to get a good grounding in Go, try out <a href="https://tour.golang.org/">the tutorial</a>.</p>\n<h2>Pre-requisites</h2>\n<p>Install:</p>\n<ul>\n<li><a href="https://docs.docker.com/install/#supported-platforms">docker</a></li>\n<li><a href="https://golang.org/">golang</a></li>\n<li><a href="https://github.com/golang/dep">dep</a></li>\n<li><a href="https://developers.google.com/protocol-buffers/">protobuf</a></li>\n<li><a href="https://github.com/ksonnet/ksonnet#install">ksonnet</a></li>\n<li><a href="https://github.com/helm/helm/releases">helm</a></li>\n<li><a href="https://github.com/kubernetes-sigs/kustomize/releases">kustomize</a></li>\n<li><a href="https://github.com/go-swagger/go-swagger/blob/master/docs/install.md">go-swagger</a></li>\n<li><a href="https://stedolan.github.io/jq/">jq</a></li>\n<li><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">kubectl</a>.</li>\n<li><a href="https://kubernetes.io/docs/setup/minikube/">minikube</a> or Docker for Desktop</li>\n</ul>\n<p>!!! note "Kustomize"\nSince Argo CD supports Kustomize v1.0 and v2.0, you will need to install both versions in order for the unit tests to run. The Kustomize 1 unit test expects to find a <code>kustomize1</code> binary in the path.  You can use this <a href="https://github.com/argoproj/argo-cd/blob/master/Dockerfile#L66-L69">link</a> to find the Kustomize 1 currently used by Argo CD and modify the curl command to download the correct OS.</p>\n<pre><code class="language-bash">brew tap go-swagger/go-swagger\nbrew install go dep protobuf kubectl ksonnet/tap/ks kubernetes-helm jq go-swagger \n</code></pre>\n<p>Set up environment variables (e.g. is <code>~/.bashrc</code>):</p>\n<pre><code class="language-bash">export GOPATH=~/go\nexport PATH=$PATH:$GOPATH/bin\n</code></pre>\n<p>Install go dependencies:</p>\n<pre><code class="language-bash">go get -u github.com/golang/protobuf/protoc-gen-go\ngo get -u github.com/go-swagger/go-swagger/cmd/swagger\ngo get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway\ngo get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger\ngo get -u github.com/golangci/golangci-lint/cmd/golangci-lint \ngo get -u github.com/mattn/goreman \ngo get -u gotest.tools/gotestsum\n</code></pre>\n<h2>Building</h2>\n<pre><code class="language-bash">go get -u github.com/argoproj/argo-cd\ndep ensure\nmake\n</code></pre>\n<p>The make command can take a while, and we recommend building the specific component you are working on</p>\n<ul>\n<li><code>make codegen</code> - Builds protobuf and swagger files</li>\n<li><code>make cli</code> - Make the argocd CLI tool</li>\n<li><code>make server</code> - Make the API/repo/controller server</li>\n<li><code>make argocd-util</code> - Make the administrator\'s utility, used for certain tasks such as import/export</li>\n</ul>\n<h2>Running Tests</h2>\n<p>To run unit tests:</p>\n<pre><code class="language-bash">make test\n</code></pre>\n<p>To run e2e tests:</p>\n<pre><code class="language-bash">make test-e2e\n</code></pre>\n<h2>Running Locally</h2>\n<p>It is much easier to run and debug if you run ArgoCD on your local machine than in the Kubernetes cluster.</p>\n<p>You should scale the deployments to zero:</p>\n<pre><code class="language-bash">kubectl -n argocd scale deployment.extensions/argocd-application-controller --replicas 0\nkubectl -n argocd scale deployment.extensions/argocd-dex-server --replicas 0\nkubectl -n argocd scale deployment.extensions/argocd-repo-server --replicas 0\nkubectl -n argocd scale deployment.extensions/argocd-server --replicas 0\nkubectl -n argocd scale deployment.extensions/argocd-redis --replicas 0\n</code></pre>\n<p>Then checkout and build the UI next to your code</p>\n<pre><code>cd ~/go/src/github.com/argoproj\ngit clone git@github.com:argoproj/argo-cd-ui.git\n</code></pre>\n<p>Follow the UI\'s <a href="https://github.com/argoproj/argo-cd-ui/blob/master/README.md">README</a> to build it.</p>\n<p>Note: you\'ll need to use the <a href="https://localhost:6443">https://localhost:6443</a> cluster now.</p>\n<p>Then start the services:</p>\n<pre><code class="language-bash">cd ~/go/src/github.com/argoproj/argo-cd\nmake start\n</code></pre>\n<p>You can now execute <code>argocd</code> command against your locally running ArgoCD by appending <code>--server localhost:8080 --plaintext --insecure</code>, e.g.:</p>\n<pre><code class="language-bash">argocd app set guestbook --path guestbook --repo https://github.com/argoproj/argocd-example-apps.git --dest-server https://localhost:6443  --dest-namespace default --server localhost:8080 --plaintext --insecure\n</code></pre>\n<p>You can open the UI: <a href="http://localhost:8080">http://localhost:8080</a></p>\n<p>Note: you\'ll need to use the <a href="https://kubernetes.default.svc">https://kubernetes.default.svc</a> cluster now.</p>\n<h2>Running Local Containers</h2>\n<p>You may need to run containers locally, so here\'s how:</p>\n<p>Create login to Docker Hub, then login.</p>\n<pre><code class="language-bash">docker login\n</code></pre>\n<p>Add your username as the environment variable, e.g. to your <code>~/.bash_profile</code>:</p>\n<pre><code class="language-bash">export IMAGE_NAMESPACE=alexcollinsintuit\n</code></pre>\n<p>If you have not built the UI image (see <a href="https://github.com/argoproj/argo-cd-ui/blob/master/README.md">the UI README</a>), then do the following:</p>\n<pre><code class="language-bash">docker pull argoproj/argocd-ui:latest\ndocker tag argoproj/argocd-ui:latest $IMAGE_NAMESPACE/argocd-ui:latest\ndocker push $IMAGE_NAMESPACE/argocd-ui:latest\n</code></pre>\n<p>Build the images:</p>\n<pre><code class="language-bash">DOCKER_PUSH=true make image\n</code></pre>\n<p>Update the manifests:</p>\n<pre><code class="language-bash">make manifests\n</code></pre>\n<p>Install the manifests:</p>\n<pre><code class="language-bash">kubectl -n argocd apply --force -f manifests/install.yaml\n</code></pre>\n<p>Scale your deployments up:</p>\n<pre><code class="language-bash">kubectl -n argocd scale deployment.extensions/argocd-application-controller --replicas 1\nkubectl -n argocd scale deployment.extensions/argocd-dex-server --replicas 1\nkubectl -n argocd scale deployment.extensions/argocd-repo-server --replicas 1\nkubectl -n argocd scale deployment.extensions/argocd-server --replicas 1\nkubectl -n argocd scale deployment.extensions/argocd-redis --replicas 1\n</code></pre>\n<p>Now you can set-up the port-forwarding and open the UI or CLI.</p>\n<h2>Pre-commit Checks</h2>\n<p>Before you commit, make sure you\'ve formatted and linted your code, or your PR will fail CI:</p>\n<pre><code class="language-bash">STAGED_GO_FILES=$(git diff --cached --name-only | grep ".go$")\n\ngofmt -w $STAGED_GO_FILES\n\nmake codgen\nmake precommit ;# lint and test\n</code></pre>',docPath:"argo-cd/docs/contributing",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-contributing-html-31eb583f21a33bb51b16.js.map