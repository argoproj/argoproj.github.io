webpackJsonp([0xe7a9839f326c],{632:function(e,a){e.exports={pathContext:{docHtml:'<p align="center">\n  <img src="https://github.com/argoproj/argo-events/blob/ebdbdd4a2a8ce47a0fc6e9a6a63531be2c26148a/docs/assets/gitlab.png?raw=true" alt="Gitlab">\n</p>\n<br/>\n<h1>Gitlab</h1>\n<p>The gateway listens to events from Gitlab. </p>\n<p>Refer <a href="https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#events">here</a> for more information on type of events.</p>\n<h3>How to define an event source in confimap?</h3>\n<p>An entry in the gateway configmap corresponds to <a href="https://github.com/argoproj/argo-events/blob/30eaa296651e80b11ffef3b20464a08a2041eb09/gateways/community/gitlab/config.go#L49-L63">this</a>.</p>\n<p>The gateway spec defined in <code>examples</code> has a <code>serviceSpec</code>. This service is used to expose the gateway server and make it reachable from GitHub.</p>\n<p><strong>How to get the URL for the service?</strong></p>\n<p>Depending upon the Kubernetes provider, you can create the Ingress or Route. </p>\n<h2>Setup</h2>\n<p><strong>1. Install <a href="../../../examples/gateways/gitlab.yaml">Gateway</a></strong></p>\n<p>We are installing gateway before creating configmap. Because we need to have the gateway pod running and a service backed by the pod, so\nthat we can get the URL for the service. </p>\n<p>Make sure gateway pod and service is running</p>\n<p><strong>2. Install <a href="../../../examples/gateways/gitlab-gateway-configmap.yaml">Gateway Configmap</a></strong></p>\n<p><strong>3. Install <a href="../../../examples/sensors/gitlab.yaml">Sensor</a></strong></p>\n<p>Make sure sensor pod is created.</p>\n<p><strong>4. Trigger Workflow</strong></p>\n<p>Depending upon the event you subscribe to, a workflow will be triggered.</p>',docPath:"argo-events/gateways/community/gitlab/readme",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-gateways-community-gitlab-7265d68f2d04f5dd55c1.js.map