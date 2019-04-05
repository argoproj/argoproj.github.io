webpackJsonp([0x6a10c45e0eab],{560:function(e,o){e.exports={pathContext:{docHtml:'<h1>FAQ</h1>\n<h2>Why is my application still <code>OutOfSync</code> immediately after a successful Sync?</h2>\n<p>See <a href="user-guide/diffing.html">Diffing</a> documentation for reasons resources can be OutOfSync, and ways to configure\nArgo CD to ignore fields when differences are expected.</p>\n<h2>Why is my application stuck in <code>Progressing</code> state?</h2>\n<p>Argo CD provides health for several standard Kubernetes types. The <code>Ingress</code> and <code>StatefulSet</code> types have known issues which might cause health check\nto return <code>Progressing</code> state instead of <code>Healthy</code>.</p>\n<ul>\n<li>\n<p><code>Ingress</code> is considered healthy if <code>status.loadBalancer.ingress</code> list is non-empty, with at least one value for <code>hostname</code> or <code>IP</code>. Some ingress controllers\n(<a href="https://github.com/heptio/contour/issues/403">contour</a>, <a href="https://github.com/argoproj/argo-cd/issues/968#issuecomment-451082913">traefik</a>) don\'t update\n<code>status.loadBalancer.ingress</code> field which causes <code>Ingress</code> to stuck in <code>Progressing</code> state forever.</p>\n</li>\n<li>\n<p><code>StatufulSet</code> is considered healthy if value of <code>status.updatedReplicas</code> field matches to <code>spec.replicas</code> field. Due to Kubernetes bug\n<a href="https://github.com/kubernetes/kubernetes/issues/68573">kubernetes/kubernetes#68573</a> the <code>status.updatedReplicas</code> is not populated. So unless you run Kubernetes version which\ninclude the fix <a href="https://github.com/kubernetes/kubernetes/pull/67570">kubernetes/kubernetes#67570</a> <code>StatefulSet</code> might stay in <code>Progressing</code> state.</p>\n</li>\n</ul>\n<p>As workaround Argo CD allows providing <a href="operator-manual/health.html">health check</a> customization which overrides default behavior.</p>\n<h2>I forgot the admin password, how do I reset it?</h2>\n<p>Edit the <code>argocd-secret</code> secret and update the <code>admin.password</code> field with a new bcrypt hash. You\ncan use a site like <a href="https://www.browserling.com/tools/bcrypt">https://www.browserling.com/tools/bcrypt</a> to generate a new hash. Another option\nis to delete both the <code>admin.password</code> and <code>admin.passwordMtime</code> keys and restart argocd-server.</p>',docPath:"argo-cd/docs/faq",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-faq-html-c3f6158994471c361072.js.map