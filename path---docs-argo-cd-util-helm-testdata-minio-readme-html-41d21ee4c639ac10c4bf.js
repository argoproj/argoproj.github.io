webpackJsonp([72294891418388],{552:function(e,t){e.exports={pathContext:{docHtml:'<h1>Minio</h1>\n<p><a href="https://minio.io">Minio</a> is a lightweight, AWS S3 compatible object storage server. It is best suited for storing unstructured data such as photos, videos, log files, backups, VM and container images. Size of an object can range from a few KBs to a maximum of 5TB. Minio server is light enough to be bundled with the application stack, similar to NodeJS, Redis and MySQL.</p>\n<p>Minio supports <a href="https://docs.minio.io/docs/distributed-minio-quickstart-guide">distributed mode</a>. In distributed mode, you can pool multiple drives (even on different machines) into a single object storage server.</p>\n<h2>Introduction</h2>\n<p>This chart bootstraps Minio deployment on a <a href="http://kubernetes.io">Kubernetes</a> cluster using the <a href="https://helm.sh">Helm</a> package manager.</p>\n<h2>Prerequisites</h2>\n<ul>\n<li>Kubernetes 1.4+ with Beta APIs enabled for default standalone mode.</li>\n<li>Kubernetes 1.5+ with Beta APIs enabled to run Minio in <a href="#distributed-minio">distributed mode</a>.</li>\n<li>PV provisioner support in the underlying infrastructure.</li>\n</ul>\n<h2>Installing the Chart</h2>\n<p>Install this chart using:</p>\n<pre><code class="language-bash">$ helm install stable/minio\n</code></pre>\n<p>The command deploys Minio on the Kubernetes cluster in the default configuration. The <a href="#configuration">configuration</a> section lists the parameters that can be configured during installation.</p>\n<h3>Release name</h3>\n<p>An instance of a chart running in a Kubernetes cluster is called a release. Each release is identified by a unique name within the cluster. Helm automatically assigns a unique release name after installing the chart. You can also set your preferred name by:</p>\n<pre><code class="language-bash">$ helm install --name my-release stable/minio\n</code></pre>\n<h3>Access and Secret keys</h3>\n<p>By default a pre-generated access and secret key will be used. To override the default keys, pass the access and secret keys as arguments to helm install.</p>\n<pre><code class="language-bash">$ helm install --set accessKey=myaccesskey,secretKey=mysecretkey \\\n    stable/minio\n</code></pre>\n<h3>Updating Minio configuration via Helm</h3>\n<p><a href="https://kubernetes.io/docs/user-guide/configmap/">ConfigMap</a> allows injecting containers with configuration data even while a Helm release is deployed.</p>\n<p>To update your Minio server configuration while it is deployed in a release, you need to</p>\n<ol>\n<li>Check all the configurable values in the Minio chart using <code>helm inspect values stable/minio</code>.</li>\n<li>Override the <code>minio_server_config</code> settings in a YAML formatted file, and then pass that file like this <code>helm upgrade -f config.yaml stable/minio</code>.</li>\n<li>Restart the Minio server(s) for the changes to take effect.</li>\n</ol>\n<p>You can also check the history of upgrades to a release using <code>helm history my-release</code>. Replace <code>my-release</code> with the actual release name.</p>\n<h2>Uninstalling the Chart</h2>\n<p>Assuming your release is named as <code>my-release</code>, delete it using the command:</p>\n<pre><code class="language-bash">$ helm delete my-release\n</code></pre>\n<p>The command removes all the Kubernetes components associated with the chart and deletes the release.</p>\n<h2>Configuration</h2>\n<p>The following table lists the configurable parameters of the Minio chart and their default values.</p>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>image.repository</code></td>\n<td>Image repository</td>\n<td><code>minio/minio</code></td>\n</tr>\n<tr>\n<td><code>image.tag</code></td>\n<td>Minio image tag. Possible values listed \n<a href="https://hub.docker.com/r/minio/minio/tags/">here</a>\n.</td>\n<td><code>RELEASE.2018-07-10T01-42-11Z</code></td>\n</tr>\n<tr>\n<td><code>image.pullPolicy</code></td>\n<td>Image pull policy</td>\n<td><code>IfNotPresent</code></td>\n</tr>\n<tr>\n<td><code>mcImage.repository</code></td>\n<td>Client image repository</td>\n<td><code>minio/mc</code></td>\n</tr>\n<tr>\n<td><code>mcImage.tag</code></td>\n<td>mc image tag. Possible values listed \n<a href="https://hub.docker.com/r/minio/mc/tags/">here</a>\n.</td>\n<td><code>RELEASE.2018-06-09T02-18-09Z</code></td>\n</tr>\n<tr>\n<td><code>mcImage.pullPolicy</code></td>\n<td>mc Image pull policy</td>\n<td><code>IfNotPresent</code></td>\n</tr>\n<tr>\n<td><code>ingress.enabled</code></td>\n<td>Enables Ingress</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>ingress.annotations</code></td>\n<td>Ingress annotations</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td><code>ingress.hosts</code></td>\n<td>Ingress accepted hostnames</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>ingress.tls</code></td>\n<td>Ingress TLS configuration</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>Minio server mode (\n<code>standalone</code>\n or \n<code>distributed</code>\n)</td>\n<td><code>standalone</code></td>\n</tr>\n<tr>\n<td><code>replicas</code></td>\n<td>Number of nodes (applicable only for Minio distributed mode). Should be 4 &#x3C;= x &#x3C;= 32</td>\n<td><code>4</code></td>\n</tr>\n<tr>\n<td><code>accessKey</code></td>\n<td>Default access key (5 to 20 characters)</td>\n<td><code>AKIAIOSFODNN7EXAMPLE</code></td>\n</tr>\n<tr>\n<td><code>secretKey</code></td>\n<td>Default secret key (8 to 40 characters)</td>\n<td><code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code></td>\n</tr>\n<tr>\n<td><code>configPath</code></td>\n<td>Default config file location</td>\n<td><code>~/.minio</code></td>\n</tr>\n<tr>\n<td><code>mountPath</code></td>\n<td>Default mount location for persistent drive</td>\n<td><code>/export</code></td>\n</tr>\n<tr>\n<td><code>service.type</code></td>\n<td>Kubernetes service type</td>\n<td><code>ClusterIP</code></td>\n</tr>\n<tr>\n<td><code>service.port</code></td>\n<td>Kubernetes port where service is exposed</td>\n<td><code>9000</code></td>\n</tr>\n<tr>\n<td><code>service.annotations</code></td>\n<td>Service annotations</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td><code>persistence.enabled</code></td>\n<td>Use persistent volume to store data</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td><code>persistence.size</code></td>\n<td>Size of persistent volume claim</td>\n<td><code>10Gi</code></td>\n</tr>\n<tr>\n<td><code>persistence.existingClaim</code></td>\n<td>Use an existing PVC to persist data</td>\n<td><code>nil</code></td>\n</tr>\n<tr>\n<td><code>persistence.storageClass</code></td>\n<td>Type of persistent volume claim</td>\n<td><code>generic</code></td>\n</tr>\n<tr>\n<td><code>persistence.accessMode</code></td>\n<td>ReadWriteOnce or ReadOnly</td>\n<td><code>ReadWriteOnce</code></td>\n</tr>\n<tr>\n<td><code>persistence.subPath</code></td>\n<td>Mount a sub directory of the persistent volume if set</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>resources</code></td>\n<td>CPU/Memory resource requests/limits</td>\n<td>Memory: \n<code>256Mi</code>\n, CPU: \n<code>100m</code></td>\n</tr>\n<tr>\n<td><code>priorityClassName</code></td>\n<td>Pod priority settings</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>nodeSelector</code></td>\n<td>Node labels for pod assignment</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td><code>affinity</code></td>\n<td>Affinity settings for pod assignment</td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td><code>tolerations</code></td>\n<td>Toleration labels for pod assignment</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td><code>defaultBucket.enabled</code></td>\n<td>If set to true, a bucket will be created after minio install</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>defaultBucket.name</code></td>\n<td>Bucket name</td>\n<td><code>bucket</code></td>\n</tr>\n<tr>\n<td><code>defaultBucket.policy</code></td>\n<td>Bucket policy</td>\n<td><code>none</code></td>\n</tr>\n<tr>\n<td><code>defaultBucket.purge</code></td>\n<td>Purge the bucket if already exists</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>azuregateway.enabled</code></td>\n<td>Use minio as an \n<a href="https://docs.minio.io/docs/minio-gateway-for-azure">azure gateway</a></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>gcsgateway.enabled</code></td>\n<td>Use minio as a \n<a href="https://docs.minio.io/docs/minio-gateway-for-gcs">Google Cloud Storage gateway</a></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>gcsgateway.gcsKeyJson</code></td>\n<td>credential json file of service account key</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>gcsgateway.projectId</code></td>\n<td>Google cloud project id</td>\n<td><code>""</code></td>\n</tr>\n<tr>\n<td><code>nasgateway.enabled</code></td>\n<td>Use minio as a \n<a href="https://docs.minio.io/docs/minio-gateway-for-nas">NAS gateway</a></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td><code>nasgateway.replicas</code></td>\n<td>Number of NAS gateway instances to be run in parallel on a PV</td>\n<td><code>4</code></td>\n</tr>\n</tbody>\n</table>\n<p>Some of the parameters above map to the env variables defined in the <a href="https://hub.docker.com/r/minio/minio/">Minio DockerHub image</a>.</p>\n<p>You can specify each parameter using the <code>--set key=value[,key=value]</code> argument to <code>helm install</code>. For example,</p>\n<pre><code class="language-bash">$ helm install --name my-release \\\n  --set persistence.size=100Gi \\\n    stable/minio\n</code></pre>\n<p>The above command deploys Minio server with a 100Gi backing persistent volume.</p>\n<p>Alternately, you can provide a YAML file that specifies parameter values while installing the chart. For example,</p>\n<pre><code class="language-bash">$ helm install --name my-release -f values.yaml stable/minio\n</code></pre>\n<blockquote>\n<p><strong>Tip</strong>: You can use the default <a href="values.yaml">values.yaml</a></p>\n</blockquote>\n<h2>Distributed Minio</h2>\n<p>This chart provisions a Minio server in standalone mode, by default. To provision Minio server in <a href="https://docs.minio.io/docs/distributed-minio-quickstart-guide">distributed mode</a>, set the <code>mode</code> field to <code>distributed</code>,</p>\n<pre><code class="language-bash">$ helm install --set mode=distributed stable/minio\n</code></pre>\n<p>This provisions Minio server in distributed mode with 4 nodes. To change the number of nodes in your distributed Minio server, set the <code>replicas</code> field,</p>\n<pre><code class="language-bash">$ helm install --set mode=distributed,replicas=8 stable/minio\n</code></pre>\n<p>This provisions Minio server in distributed mode with 8 nodes. Note that the <code>replicas</code> value should be an integer between 4 and 16 (inclusive).</p>\n<h3>StatefulSet <a href="http://kubernetes.io/docs/concepts/abstractions/controllers/statefulsets/#limitations">limitations</a> applicable to distributed Minio</h3>\n<ol>\n<li>StatefulSets need persistent storage, so the <code>persistence.enabled</code> flag is ignored when <code>mode</code> is set to <code>distributed</code>.</li>\n<li>When uninstalling a distributed Minio release, you\'ll need to manually delete volumes associated with the StatefulSet.</li>\n</ol>\n<h2>NAS Gateway</h2>\n<h3>Prerequisites</h3>\n<p>Minio in <a href="https://docs.minio.io/docs/minio-gateway-for-nas">NAS gateway mode</a> can be used to create multiple Minio instances backed by single PV in <code>ReadWriteMany</code> mode. Currently few <a href="https://kubernetes.io/docs/user-guide/persistent-volumes/#access-modes">Kubernetes volume plugins</a> support <code>ReadWriteMany</code> mode. To deploy Minio NAS gateway with Helm chart you\'ll need to have a Persistent Volume running with one of the supported volume plugins. <a href="https://kubernetes.io/docs/user-guide/volumes/#nfs">This document</a>\noutlines steps to create a NFS PV in Kubernetes cluster.</p>\n<h3>Provision NAS Gateway Minio instances</h3>\n<p>To provision Minio servers in <a href="https://docs.minio.io/docs/minio-gateway-for-nas">NAS gateway mode</a>, set the <code>nasgateway.enabled</code> field to <code>true</code>,</p>\n<pre><code class="language-bash">$ helm install --set nasgateway.enabled=true stable/minio\n</code></pre>\n<p>This provisions 4 Minio NAS gateway instances backed by single storage. To change the number of instances in your Minio deployment, set the <code>replicas</code> field,</p>\n<pre><code class="language-bash">$ helm install --set nasgateway.enabled=true,nasgateway.replicas=8 stable/minio\n</code></pre>\n<p>This provisions Minio NAS gateway with 8 instances.</p>\n<h2>Persistence</h2>\n<p>This chart provisions a PersistentVolumeClaim and mounts corresponding persistent volume to default location <code>/export</code>. You\'ll need physical storage available in the Kubernetes cluster for this to work. If you\'d rather use <code>emptyDir</code>, disable PersistentVolumeClaim by:</p>\n<pre><code class="language-bash">$ helm install --set persistence.enabled=false stable/minio\n</code></pre>\n<blockquote>\n<p><em>"An emptyDir volume is first created when a Pod is assigned to a Node, and exists as long as that Pod is running on that node. When a Pod is removed from a node for any reason, the data in the emptyDir is deleted forever."</em></p>\n</blockquote>\n<h2>Existing PersistentVolumeClaim</h2>\n<p>If a Persistent Volume Claim already exists, specify it during installation.</p>\n<ol>\n<li>Create the PersistentVolume</li>\n<li>Create the PersistentVolumeClaim</li>\n<li>Install the chart</li>\n</ol>\n<pre><code class="language-bash">$ helm install --set persistence.existingClaim=PVC_NAME stable/minio\n</code></pre>\n<h2>NetworkPolicy</h2>\n<p>To enable network policy for Minio,\ninstall <a href="https://kubernetes.io/docs/tasks/administer-cluster/declare-network-policy#before-you-begin">a networking plugin that implements the Kubernetes\nNetworkPolicy spec</a>,\nand set <code>networkPolicy.enabled</code> to <code>true</code>.</p>\n<p>For Kubernetes v1.5 &#x26; v1.6, you must also turn on NetworkPolicy by setting\nthe DefaultDeny namespace annotation. Note: this will enforce policy for <em>all</em> pods in the namespace:</p>\n<pre><code>kubectl annotate namespace default "net.beta.kubernetes.io/network-policy={\\"ingress\\":{\\"isolation\\":\\"DefaultDeny\\"}}"\n</code></pre>\n<p>With NetworkPolicy enabled, traffic will be limited to just port 9000.</p>\n<p>For more precise policy, set <code>networkPolicy.allowExternal=true</code>. This will\nonly allow pods with the generated client label to connect to Minio.\nThis label will be displayed in the output of a successful install.</p>',docPath:"argo-cd/util/helm/testdata/minio/readme",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-util-helm-testdata-minio-readme-html-41d21ee4c639ac10c4bf.js.map