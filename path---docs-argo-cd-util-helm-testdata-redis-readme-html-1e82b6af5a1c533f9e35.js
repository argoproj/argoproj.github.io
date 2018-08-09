webpackJsonp([0x972d5d6a0051],{499:function(e,t){e.exports={pathContext:{docHtml:'<h1>Redis</h1>\n<p><a href="http://redis.io/">Redis</a> is an advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.</p>\n<h2>TL;DR</h2>\n<pre><code class="language-bash"># Testing configuration\n$ helm install stable/redis\n</code></pre>\n<pre><code class="language-bash"># Production configuration\n$ helm install stable/redis --values values-production.yaml\n</code></pre>\n<h2>Introduction</h2>\n<p>This chart bootstraps a <a href="https://github.com/bitnami/bitnami-docker-redis">Redis</a> deployment on a <a href="http://kubernetes.io">Kubernetes</a> cluster using the <a href="https://helm.sh">Helm</a> package manager.</p>\n<h2>Prerequisites</h2>\n<ul>\n<li>Kubernetes 1.8+</li>\n<li>PV provisioner support in the underlying infrastructure</li>\n</ul>\n<h2>Installing the Chart</h2>\n<p>To install the chart with the release name <code>my-release</code>:</p>\n<pre><code class="language-bash">$ helm install --name my-release stable/redis\n</code></pre>\n<p>The command deploys Redis on the Kubernetes cluster in the default configuration. The <a href="#configuration">configuration</a> section lists the parameters that can be configured during installation.</p>\n<blockquote>\n<p><strong>Tip</strong>: List all releases using <code>helm list</code></p>\n</blockquote>\n<h2>Uninstalling the Chart</h2>\n<p>To uninstall/delete the <code>my-release</code> deployment:</p>\n<pre><code class="language-bash">$ helm delete my-release\n</code></pre>\n<p>The command removes all the Kubernetes components associated with the chart and deletes the release.</p>\n<h2>Configuration</h2>\n<p>The following table lists the configurable parameters of the Redis chart and their default values.</p>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>image.registry</code></td>\n<td>Redis Image registry</td>\n<td><code>docker.io</code></td>\n</tr>\n<tr>\n<td><code>image.repository</code></td>\n<td>Redis Image name</td>\n<td><code>bitnami/redis</code></td>\n</tr>\n<tr>\n<td><code>image.tag</code></td>\n<td>Redis Image tag</td>\n<td><code>{VERSION}</code></td>\n</tr>\n<tr>\n<td><code>image.pullPolicy</code></td>\n<td>Image pull policy</td>\n<td><code>Always</code></td>\n</tr>\n<tr>\n<td><code>image.pullSecrets</code></td>\n<td>Specify docker-registry secret names as an array</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>cluster.enabled</code></td>\n<td>Use master-slave topology</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>cluster.slaveCount</code></td>\n<td>Number of slaves</td>\n<td>1</td>\n</tr>\n<tr>\n<td><code>existingSecret</code></td>\n<td>Name of existing secret object (for password authentication)</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>usePassword</code></td>\n<td>Use password</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>password</code></td>\n<td>Redis password (ignored if existingSecret set)</td>\n<td>Randomly generated</td>\n</tr>\n<tr>\n<td><code>networkPolicy.enabled</code></td>\n<td>Enable NetworkPolicy</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>networkPolicy.allowExternal</code></td>\n<td>Don\'t require client label for connections</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>serviceAccount.create</code></td>\n<td>Specifies whether a ServiceAccount should be created</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>serviceAccount.name</code></td>\n<td>The name of the ServiceAccount to create</td>\n<td>Generated using the fullname template</td>\n</tr>\n<tr>\n<td><code>rbac.create</code></td>\n<td>Specifies whether RBAC resources should be created</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>rbac.role.rules</code></td>\n<td>Rules to create</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>metrics.enabled</code></td>\n<td>Start a side-car prometheus exporter</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>metrics.image.registry</code></td>\n<td>Redis exporter image registry</td>\n<td><code>docker.io</code></td>\n</tr>\n<tr>\n<td><code>metrics.image.repository</code></td>\n<td>Redis exporter image name</td>\n<td><code>bitnami/redis</code></td>\n</tr>\n<tr>\n<td><code>metrics.image.tag</code></td>\n<td>Redis exporter image tag</td>\n<td><code>v0.20.2</code></td>\n</tr>\n<tr>\n<td><code>metrics.image.pullPolicy</code></td>\n<td>Image pull policy</td>\n<td><code>IfNotPresent</code></td>\n</tr>\n<tr>\n<td><code>metrics.image.pullSecrets</code></td>\n<td>Specify docker-registry secret names as an array</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>metrics.podLabels</code></td>\n<td>Additional labels for Metrics exporter pod</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>metrics.podAnnotations</code></td>\n<td>Additional annotations for Metrics exporter pod</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>master.service.type</code></td>\n<td>Kubernetes Service type (redis metrics)</td>\n<td><code>LoadBalancer</code></td>\n</tr>\n<tr>\n<td><code>metrics.service.annotations</code></td>\n<td>Annotations for the services to monitor  (redis master and redis slave service)</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>metrics.service.loadBalancerIP</code></td>\n<td>loadBalancerIP if redis metrics service type is \n<code>LoadBalancer</code></td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>metrics.resources</code></td>\n<td>Exporter resource requests/limit</td>\n<td>Memory: \n<code>256Mi</code>\n, CPU: \n<code>100m</code></td>\n</tr>\n<tr>\n<td><code>persistence.existingClaim</code></td>\n<td>Provide an existing PersistentVolumeClaim</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.enabled</code></td>\n<td>Use a PVC to persist data (master node)</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.path</code></td>\n<td>Path to mount the volume at, to use other images</td>\n<td><code>/bitnami</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.subPath</code></td>\n<td>Subdirectory of the volume to mount at</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.storageClass</code></td>\n<td>Storage class of backing PVC</td>\n<td><code>generic</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.accessModes</code></td>\n<td>Persistent Volume Access Modes</td>\n<td><code>[ReadWriteOnce]</code></td>\n</tr>\n<tr>\n<td><code>master.persistence.size</code></td>\n<td>Size of data volume</td>\n<td><code>8Gi</code></td>\n</tr>\n<tr>\n<td><code>master.statefulset.updateStrategy</code></td>\n<td>Update strategy for StatefulSet</td>\n<td>onDelete</td>\n</tr>\n<tr>\n<td><code>master.statefulset.rollingUpdatePartition</code></td>\n<td>Partition update strategy</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>master.podLabels</code></td>\n<td>Additional labels for Redis master pod</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>master.podAnnotations</code></td>\n<td>Additional annotations for Redis master pod</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>master.port</code></td>\n<td>Redis master port</td>\n<td>6379</td>\n</tr>\n<tr>\n<td><code>master.args</code></td>\n<td>Redis master command-line args</td>\n<td>[]</td>\n</tr>\n<tr>\n<td><code>master.disableCommands</code></td>\n<td>Comma-separated list of Redis commands to disable (master)</td>\n<td><code>FLUSHDB,FLUSHALL</code></td>\n</tr>\n<tr>\n<td><code>master.extraFlags</code></td>\n<td>Redis master additional command line flags</td>\n<td>[]</td>\n</tr>\n<tr>\n<td><code>master.nodeSelector</code></td>\n<td>Redis master Node labels for pod assignment</td>\n<td>{"beta.kubernetes.io/arch": "amd64"}</td>\n</tr>\n<tr>\n<td><code>master.tolerations</code></td>\n<td>Toleration labels for Redis master pod assignment</td>\n<td>[]</td>\n</tr>\n<tr>\n<td><code>master.affinity</code></td>\n<td>Affinity settings for Redis master pod assignment</td>\n<td>[]</td>\n</tr>\n<tr>\n<td><code>master.schedulerName</code></td>\n<td>Name of an alternate scheduler</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>master.service.type</code></td>\n<td>Kubernetes Service type (redis master)</td>\n<td><code>ClusterIP</code></td>\n</tr>\n<tr>\n<td><code>master.service.annotations</code></td>\n<td>annotations for redis master service</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>master.service.loadBalancerIP</code></td>\n<td>loadBalancerIP if redis master service type is \n<code>LoadBalancer</code></td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>master.securityContext.enabled</code></td>\n<td>Enable security context (redis master pod)</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>master.securityContext.fsGroup</code></td>\n<td>Group ID for the container (redis master pod)</td>\n<td><code>1001</code></td>\n</tr>\n<tr>\n<td><code>master.securityContext.runAsUser</code></td>\n<td>User ID for the container (redis master pod)</td>\n<td><code>1001</code></td>\n</tr>\n<tr>\n<td><code>master.resources</code></td>\n<td>Redis master CPU/Memory resource requests/limits</td>\n<td>Memory: \n<code>256Mi</code>\n, CPU: \n<code>100m</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.enabled</code></td>\n<td>Turn on and off liveness probe (redis master pod)</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.initialDelaySeconds</code></td>\n<td>Delay before liveness probe is initiated (redis master pod)</td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.periodSeconds</code></td>\n<td>How often to perform the probe (redis master pod)</td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.timeoutSeconds</code></td>\n<td>When the probe times out (redis master pod)</td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.successThreshold</code></td>\n<td>Minimum consecutive successes for the probe to be considered successful after having failed (redis master pod)</td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td><code>master.livenessProbe.failureThreshold</code></td>\n<td>Minimum consecutive failures for the probe to be considered failed after having succeeded.</td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.enabled</code></td>\n<td>Turn on and off readiness probe (redis master pod)</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.initialDelaySeconds</code></td>\n<td>Delay before readiness probe is initiated (redis master pod)</td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.periodSeconds</code></td>\n<td>How often to perform the probe (redis master pod)</td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.timeoutSeconds</code></td>\n<td>When the probe times out (redis master pod)</td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.successThreshold</code></td>\n<td>Minimum consecutive successes for the probe to be considered successful after having failed (redis master pod)</td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td><code>master.readinessProbe.failureThreshold</code></td>\n<td>Minimum consecutive failures for the probe to be considered failed after having succeeded.</td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td><code>slave.serviceType</code></td>\n<td>Kubernetes Service type (redis slave)</td>\n<td><code>LoadBalancer</code></td>\n</tr>\n<tr>\n<td><code>slave.service.annotations</code></td>\n<td>annotations for redis slave service</td>\n<td>{}</td>\n</tr>\n<tr>\n<td><code>slave.service.loadBalancerIP</code></td>\n<td>LoadBalancerIP if Redis slave service type is \n<code>LoadBalancer</code></td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>slave.port</code></td>\n<td>Redis slave port</td>\n<td><code>master.port</code></td>\n</tr>\n<tr>\n<td><code>slave.args</code></td>\n<td>Redis slave command-line args</td>\n<td><code>master.args</code></td>\n</tr>\n<tr>\n<td><code>slave.disableCommands</code></td>\n<td>Comma-separated list of Redis commands to disable (slave)</td>\n<td><code>master.disableCommands</code></td>\n</tr>\n<tr>\n<td><code>slave.extraFlags</code></td>\n<td>Redis slave additional command line flags</td>\n<td><code>master.extraFlags</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.enabled</code></td>\n<td>Turn on and off liveness probe (redis slave pod)</td>\n<td><code>master.livenessProbe.enabled</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.initialDelaySeconds</code></td>\n<td>Delay before liveness probe is initiated (redis slave pod)</td>\n<td><code>master.livenessProbe.initialDelaySeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.periodSeconds</code></td>\n<td>How often to perform the probe (redis slave pod)</td>\n<td><code>master.livenessProbe.periodSeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.timeoutSeconds</code></td>\n<td>When the probe times out (redis slave pod)</td>\n<td><code>master.livenessProbe.timeoutSeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.successThreshold</code></td>\n<td>Minimum consecutive successes for the probe to be considered successful after having failed (redis slave pod)</td>\n<td><code>master.livenessProbe.successThreshold</code></td>\n</tr>\n<tr>\n<td><code>slave.livenessProbe.failureThreshold</code></td>\n<td>Minimum consecutive failures for the probe to be considered failed after having succeeded.</td>\n<td><code>master.livenessProbe.failureThreshold</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.enabled</code></td>\n<td>Turn on and off slave.readiness probe (redis slave pod)</td>\n<td><code>master.readinessProbe.enabled</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.initialDelaySeconds</code></td>\n<td>Delay before slave.readiness probe is initiated (redis slave pod)</td>\n<td><code>master.readinessProbe.initialDelaySeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.periodSeconds</code></td>\n<td>How often to perform the probe (redis slave pod)</td>\n<td><code>master.readinessProbe.periodSeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.timeoutSeconds</code></td>\n<td>When the probe times out (redis slave pod)</td>\n<td><code>master.readinessProbe.timeoutSeconds</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.successThreshold</code></td>\n<td>Minimum consecutive successes for the probe to be considered successful after having failed (redis slave pod)</td>\n<td><code>master.readinessProbe.successThreshold</code></td>\n</tr>\n<tr>\n<td><code>slave.readinessProbe.failureThreshold</code></td>\n<td>Minimum consecutive failures for the probe to be considered failed after having succeeded. (redis slave pod)</td>\n<td><code>master.readinessProbe.failureThreshold</code></td>\n</tr>\n<tr>\n<td><code>slave.podLabels</code></td>\n<td>Additional labels for Redis slave pod</td>\n<td><code>master.podLabels</code></td>\n</tr>\n<tr>\n<td><code>slave.podAnnotations</code></td>\n<td>Additional annotations for Redis slave pod</td>\n<td><code>master.podAnnotations</code></td>\n</tr>\n<tr>\n<td><code>slave.schedulerName</code></td>\n<td>Name of an alternate scheduler</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>slave.securityContext.enabled</code></td>\n<td>Enable security context (redis slave pod)</td>\n<td><code>master.securityContext.enabled</code></td>\n</tr>\n<tr>\n<td><code>slave.securityContext.fsGroup</code></td>\n<td>Group ID for the container (redis slave pod)</td>\n<td><code>master.securityContext.fsGroup</code></td>\n</tr>\n<tr>\n<td><code>slave.securityContext.runAsUser</code></td>\n<td>User ID for the container (redis slave pod)</td>\n<td><code>master.securityContext.runAsUser</code></td>\n</tr>\n<tr>\n<td><code>slave.resources</code></td>\n<td>Redis slave CPU/Memory resource requests/limits</td>\n<td><code>master.resources</code></td>\n</tr>\n<tr>\n<td><code>slave.affinity</code></td>\n<td>Enable node/pod affinity for slaves</td>\n<td>{}</td>\n</tr>\n</tbody>\n</table>\n<p>The above parameters map to the env variables defined in <a href="http://github.com/bitnami/bitnami-docker-redis">bitnami/redis</a>. For more information please refer to the <a href="http://github.com/bitnami/bitnami-docker-redis">bitnami/redis</a> image documentation.</p>\n<p>Specify each parameter using the <code>--set key=value[,key=value]</code> argument to <code>helm install</code>. For example,</p>\n<pre><code class="language-bash">$ helm install --name my-release \\\n  --set password=secretpassword \\\n    stable/redis\n</code></pre>\n<p>The above command sets the Redis server password to <code>secretpassword</code>.</p>\n<p>Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example,</p>\n<pre><code class="language-bash">$ helm install --name my-release -f values.yaml stable/redis\n</code></pre>\n<blockquote>\n<p><strong>Tip</strong>: You can use the default <a href="values.yaml">values.yaml</a></p>\n</blockquote>\n<blockquote>\n<p><strong>Note for minikube users</strong>: Current versions of minikube (v0.24.1 at the time of writing) provision <code>hostPath</code> persistent volumes that are only writable by root. Using chart defaults cause pod failure for the Redis pod as it attempts to write to the <code>/bitnami</code> directory. Consider installing Redis with <code>--set persistence.enabled=false</code>. See minikube issue <a href="https://github.com/kubernetes/minikube/issues/1990">1990</a> for more information.</p>\n</blockquote>\n<h2>NetworkPolicy</h2>\n<p>To enable network policy for Redis, install\n<a href="https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy#before-you-begin">a networking plugin that implements the Kubernetes NetworkPolicy spec</a>,\nand set <code>networkPolicy.enabled</code> to <code>true</code>.</p>\n<p>For Kubernetes v1.5 &#x26; v1.6, you must also turn on NetworkPolicy by setting\nthe DefaultDeny namespace annotation. Note: this will enforce policy for <em>all</em> pods in the namespace:</p>\n<pre><code>kubectl annotate namespace default "net.beta.kubernetes.io/network-policy={\\"ingress\\":{\\"isolation\\":\\"DefaultDeny\\"}}"\n</code></pre>\n<p>With NetworkPolicy enabled, only pods with the generated client label will be\nable to connect to Redis. This label will be displayed in the output\nafter a successful install.</p>\n<h2>Persistence</h2>\n<p>The <a href="https://github.com/bitnami/bitnami-docker-redis">Bitnami Redis</a> image stores the Redis data and configurations at the <code>/bitnami</code> path of the container.</p>\n<p>By default, the chart mounts a <a href="http://kubernetes.io/docs/user-guide/persistent-volumes/">Persistent Volume</a> at this location. The volume is created using dynamic volume provisioning. If a Persistent Volume Claim already exists, specify it during installation.</p>\n<p>By default, the chart persists both data and configuration. If you wish to persist only the data directory set <code>persistence.path</code> to <code>/bitnami/redis/data</code> and <code>persistence.subPath</code> to <code>redis/data</code>.</p>\n<h3>Existing PersistentVolumeClaim</h3>\n<ol>\n<li>Create the PersistentVolume</li>\n<li>Create the PersistentVolumeClaim</li>\n<li>Install the chart</li>\n</ol>\n<pre><code class="language-bash">$ helm install --set persistence.existingClaim=PVC_NAME stable/redis\n</code></pre>\n<h2>Metrics</h2>\n<p>The chart optionally can start a metrics exporter for <a href="https://prometheus.io">prometheus</a>. The metrics endpoint (port 9121) is exposed in the service. Metrics can be scraped from within the cluster using something similar as the described in the <a href="https://github.com/prometheus/prometheus/blob/master/documentation/examples/prometheus-kubernetes.yml">example Prometheus scrape configuration</a>. If metrics are to be scraped from outside the cluster, the Kubernetes API proxy can be utilized to access the endpoint.</p>',docPath:"argo-cd/util/helm/testdata/redis/readme",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-util-helm-testdata-redis-readme-html-1e82b6af5a1c533f9e35.js.map