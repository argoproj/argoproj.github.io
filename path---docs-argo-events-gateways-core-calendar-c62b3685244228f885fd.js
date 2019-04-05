webpackJsonp([0xdf4797def6f1],{640:function(e,a){e.exports={pathContext:{docHtml:'<p align="center">\n  <img src="https://github.com/argoproj/argo-events/blob/ebdbdd4a2a8ce47a0fc6e9a6a63531be2c26148a/docs/assets/calendar.png?raw=true" alt="Calendar">\n</p>\n<br/>\n<h1>Calendar</h1>\n<p>Calendar gateway can be used when you to schedule K8s resources on an interval\nor cron schedule.</p>\n<h2>How to define an event source in confimap?</h2>\n<p>An entry in the gateway configmap corresponds to <a href="https://github.com/argoproj/argo-events/blob/a913dafbf000eb05401ef2c847b29152af82977f/gateways/core/calendar/config.go#L35-L55">this</a>.</p>\n<p>The <a href="../../../examples/gateways/calendar-gateway-configmap.yaml">gateway configmap</a> contains three event source configurations,</p>\n<p>The <code>interval</code> configuration will basically generate an event after every 10 seconds.</p>\n<p>The <code>schedule</code> configuration will generate an event every 30 minutes past an hour</p>\n<p>The <code>withdata</code> configuration will generate an event every 30 minutes past an hour but the time zone is "America/New_York"\nand along with event time, event payload will also contain a string  "{\\r\\n"hello": "world"\\r\\n}"</p>\n<p><strong>What is the use of <code>userPayload</code>?</strong></p>\n<p>Only the event time is probably not sufficient as event payload. You may want to have an accompanying user defined data.\nThis user defined data is <code>userPayload</code>. You can basically place any string here and gateway will put that in event payload.  </p>\n<h3>Event Payload Structure</h3>\n<p>The <a href="https://github.com/argoproj/argo-events/blob/a913dafbf000eb05401ef2c847b29152af82977f/gateways/core/calendar/config.go#L60-L64">event payload</a> contains <code>eventTime</code> and <code>userPayload</code> (optional)</p>\n<h2>Setup</h2>\n<p><strong>1. Install <a href="../../../examples/gateways/calendar-gateway-configmap.yaml">Gateway Configmap</a></strong></p>\n<p><strong>2. Install <a href="../../../examples/gateways/calendar.yaml">Gateway</a></strong></p>\n<p>Make sure the gateway pod is created.</p>\n<p><strong>3. Install <a href="../../../examples/sensors/calendar.yaml">Sensor</a></strong></p>\n<p>Make sure the sensor pod is created.</p>\n<p><strong>4. Trigger Workflow</strong></p>\n<p>Wait for 10 seconds to pass or if the sensor has <code>calendar-gateway:schedule</code> as event dependency, then wait for 30 min past each hour\nfor workflow to trigger.</p>\n<h2>Add new schedule</h2>\n<p>Simply edit the gateway configmap, add the new endpoint entries and save. The gateway\nwill automatically register the new cron schedules or intervals.</p>\n<h2>Stop an existing schedule</h2>\n<p>Edit the gateway configmap, remove the entry and save it. Gateway pod will stop the schedule.</p>',docPath:"argo-events/gateways/core/calendar/readme",proj:"argo-events"}}}});
//# sourceMappingURL=path---docs-argo-events-gateways-core-calendar-c62b3685244228f885fd.js.map