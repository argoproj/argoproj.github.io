webpackJsonp([0xb84cac8b23c1],{615:function(e,n){e.exports={pathContext:{docHtml:'<h1>Internal Communication</h1>\n<ol>\n<li><a href="#how-gateway-forwards-events-to-sensor">How gateway forwards events to sensor</a></li>\n<li><a href="#http">HTTP</a></li>\n<li><a href="#nats-standard--streaming">NATS Standard &#x26; Streaming</a></li>\n</ol>\n<h2>How gateway forwards events to sensor?</h2>\n<p>There are two ways an event is dispatched from gateway to sensor:</p>\n<ol>\n<li><strong>HTTP</strong></li>\n<li><strong>NATS standard or streaming service</strong></li>\n</ol>\n<br/>\n<p align="center">\n  <img src="https://github.com/argoproj/argo-events/blob/master/docs/assets/communication.png?raw=true" alt="Sensor">\n</p>\n<br/>\n<h2>HTTP</h2>\n<ul>\n<li>\n<p>To use HTTP as communication channel between gateway and sensor, you need to configure the <code>eventProtocol</code> in gateway as HTTP. Then, you need to specify\nthe port on which the HTTP server in sensor will be running. The HTTP server is spun up automatically with the port configured in sensor spec when\nyou create the sensor with <code>eventProtocol</code> as HTTP.</p>\n</li>\n<li>\n<p>You don\'t need to specify address of sensor pod. The sensor pod is exposed through a ClusterIP service. This is taken care by the sensor controller.\nThe name of the sensor service is formatted in a specific way by sensor controller so that gateway can create the service name from sensor name.\nThis is how gateway gets the name of the service exposing sensor. Using the port defined in the spec, gateway makes HTTP POST requests to sensor service.  </p>\n<ul>\n<li><a href="https://github.com/argoproj/argo-events/blob/master/examples/gateways/webhook-http.yaml"><strong>Gateway Example</strong></a></li>\n<li><a href="https://github.com/argoproj/argo-events/blob/master/examples/sensors/webhook-http.yaml"><strong>Sensor Example</strong></a></li>\n</ul>\n</li>\n</ul>\n<h2>NATS Standard &#x26; Streaming</h2>\n<ul>\n<li>\n<p>To use NATS standard or streaming as communication channel between gateway and sensor, you need to configure the <code>eventProtocol</code> in gateway as NATS and type as either <code>Standard</code> or <code>Streaming</code>.\nYou can read more about NATS <a href="https://nats.io/documentation/">here</a></p>\n</li>\n<li>\n<p>In case of NATS, gateway doesn\'t need to be aware of sensors because the gateway acts as a publisher and sensors act as subscriber. </p>\n</li>\n<li>\n<p>You can store events in external persistent volume. This gives you ability to replay events in future for any reasons.\nRead more about storing NATS messages <a href="https://nats.io/blog/use-cases-for-persistent-logs-with-nats-streaming/">here</a></p>\n</li>\n<li>\n<p>NATS also facilitates the components that are not part of Argo-Events to consume events generated by gateway.</p>\n</li>\n<li>\n<p>For a sensor to consume the events from NATS, the <code>eventProtocol</code> needs to specified as NATS. You can then configure the Standard or Streaming connection detail in <code>eventProtocol</code>.</p>\n<ol>\n<li>\n<p>Standard NATS example</p>\n</li>\n<li>\n<p><a href="https://github.com/argoproj/argo-events/blob/master/examples/gateways/webhook-nats-standard.yaml"><strong>Gateway Example</strong></a></p>\n</li>\n<li>\n<p><a href="https://github.com/argoproj/argo-events/blob/master/examples/sensors/webhook-nats.yaml"><strong>Sensor Example</strong></a></p>\n</li>\n<li>\n<p>Streaming NATS example</p>\n</li>\n<li>\n<p><a href="https://github.com/argoproj/argo-events/blob/master/examples/gateways/webhook-nats-streaming.yaml"><strong>Gateway Example</strong></a></p>\n</li>\n<li>\n<p><a href="https://github.com/argoproj/argo-events/blob/master/examples/sensors/webhook-nats-streaming.yaml"><strong>Sensor Example</strong></a></p>\n</li>\n</ol>\n<p><strong>Note</strong>: The framework <strong><em>does not</em></strong> provide a NATS installation. You can follow <a href="https://github.com/nats-io/nats-streaming-operator">this guide</a> to install NATS onto your cluster.</p>\n</li>\n</ul>',docPath:"argo-events/docs/communication",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-docs-communication-html-d7d518bdc9b383d17a2d.js.map