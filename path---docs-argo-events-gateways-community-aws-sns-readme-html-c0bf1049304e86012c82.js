webpackJsonp([84109757656683],{623:function(e,a){e.exports={pathContext:{docHtml:'<p align="center">\n  <img src="https://github.com/argoproj/argo-events/blob/ebdbdd4a2a8ce47a0fc6e9a6a63531be2c26148a/docs/assets/sns.png?raw=true" alt="AWS SNS">\n</p>\n<br/>\n<h1>AWS SNS</h1>\n<p>AWS SNS gateway listens to notifications from SNS.</p>\n<h3>How to define an event source in confimap?</h3>\n<p>An entry in the gateway configmap corresponds to <a href="https://github.com/argoproj/argo-events/blob/a913dafbf000eb05401ef2c847b29152af82977f/gateways/community/aws-sns/config.go#L70-L75">this</a>.</p>\n<h3>Why is there webhook in the gateway?</h3>\n<p>Because one of the ways you can receive notifications from SNS is over http. So the gateway runs a http server internally.\nOnce you create a new gateway configmap or add a new event source entry in the configmap, the gateway will register the url of the server on AWS.\nAll notifications for that topic will then be dispatched by SNS over to the endpoint specified in event source.</p>\n<p>The gateway spec defined in <code>examples</code> has a <code>serviceSpec</code>. This service is used to expose the gateway server to the outside world.</p>\n<p><strong>How to get the URL for the service?</strong>\nDepending upon the Kubernetes provider, you can create the Ingress or Route. </p>\n<h2>Setup</h2>\n<p><strong>1. Install <a href="../../../examples/gateways/aws-sns.yaml">Gateway</a></strong></p>\n<p>We are installing gateway before creating configmap. Because we need to have the gateway pod running and a service backed by the pod, so\nthat we can get the URL for the service. </p>\n<p>Make sure gateway pod and service is running</p>\n<p><strong>2. Install <a href="../../../examples/gateways/aws-sns-gateway-configmap.yaml">Gateway Configmap</a></strong></p>\n<p><strong>3. Install <a href="../../../examples/sensors/aws-sns.yaml">Sensor</a></strong></p>\n<p>Make sure sensor pod is created.</p>\n<p><strong>4. Trigger Workflow</strong></p>\n<p>As soon as there is message on your SNS topic, a workflow will be triggered.\n</p>',docPath:"argo-events/gateways/community/aws-sns/readme",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-gateways-community-aws-sns-readme-html-c0bf1049304e86012c82.js.map