webpackJsonp([0x8c085e96c980],{635:function(e,n){e.exports={pathContext:{docHtml:'<p align="center">\n  <img src="https://github.com/argoproj/argo-events/blob/ebdbdd4a2a8ce47a0fc6e9a6a63531be2c26148a/docs/assets/netapp.png?raw=true" alt="NetApp">\n</p>\n<br/>\n<h1>StorageGrid</h1>\n<p>The gateway listens to bucket notifications from storage grid.</p>\n<h3>How to define an event source in confimap?</h3>\n<p>An entry in the gateway configmap corresponds to <a href="https://github.com/argoproj/argo-events/blob/a913dafbf000eb05401ef2c847b29152af82977f/gateways/community/slack/config.go#L38-L41">this</a>.</p>\n<p>Note: The gateway does not register the webhook endpoint on storage grid. You need to do it manually.\nThis is mainly because limitations of storage grid api.</p>\n<p>The gateway spec defined in <code>examples</code> has a <code>serviceSpec</code>. This service is used to expose the gateway server and make it reachable from StorageGrid.</p>\n<p><strong>How to get the URL for the service?</strong></p>\n<p>Depending upon the Kubernetes provider, you can create the Ingress or Route. </p>\n<h2>Setup</h2>\n<p><strong>1. Install <a href="../../../examples/gateways/storage-grid.yaml">Gateway</a></strong></p>\n<p>Make sure gateway pod and service is running</p>\n<p><strong>2. Install <a href="../../../examples/gateways/storage-grid-gateway-configmap.yaml">Gateway Configmap</a></strong></p>\n<p><strong>3. Install <a href="../../../examples/sensors/storage-grid.yaml">Sensor</a></strong></p>\n<p>Make sure sensor pod is created.</p>\n<p><strong>4. Configure notifications</strong></p>\n<ul>\n<li>\n<p>Go to your tenant page on StorageGRID</p>\n</li>\n<li>\n<p>Create an endpoint with the following values, and click save</p>\n<pre><code>Display Name: S3 Notifications\nURI: &#x3C;route-url-you-created>\nURN: urn:mytext:sns:us-east::my_topic\nAccess Key: &#x3C;your-access-key>\nSecret Key: &#x3C;your-secret-key>\nCertificate Validation: &#x3C;Do not verify>\n</code></pre>\n</li>\n<li>\n<p>Go to the bucket for which you want to configure notifications.\nEnter the following XML string, and click save</p>\n<pre><code class="language-xml">&#x3C;NotificationConfiguration>\n    &#x3C;TopicConfiguration>\n        &#x3C;Id>Object-Event&#x3C;/Id>\n        &#x3C;Topic>urn:mytext:sns:us-east::my_topic&#x3C;/Topic>\n        &#x3C;Event>s3:ObjectCreated:*&#x3C;/Event>\n        &#x3C;Event>s3:ObjectRemoved:*&#x3C;/Event>\n    &#x3C;/TopicConfiguration>\n&#x3C;/NotificationConfiguration>\n</code></pre>\n</li>\n</ul>\n<p><strong>5. Trigger Workflow</strong></p>\n<p>Drop a file into the bucket for which you configured the notifications and watch Argo workflow being triggered.</p>',docPath:"argo-events/gateways/community/storagegrid/readme",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-gateways-community-storagegrid-readme-html-34a42560a1946aa4acb4.js.map