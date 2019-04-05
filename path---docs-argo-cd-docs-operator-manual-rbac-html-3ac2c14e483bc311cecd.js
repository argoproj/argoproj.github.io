webpackJsonp([0xca682e05b0f1],{570:function(e,o){e.exports={pathContext:{docHtml:'<h1>RBAC</h1>\n<h2>Overview</h2>\n<p>The RBAC feature enables restriction of access to Argo CD resources. Argo CD does not have its own\nuser management system and has only one built-in user <code>admin</code>. The <code>admin</code> user is a superuser and\nit has unrestricted access to the system. RBAC requires <a href="./sso.html">SSO configuration</a>. Once SSO is\nconfigured, additional RBAC roles can be defined, and SSO groups can man be mapped to roles.</p>\n<h2>Configure RBAC</h2>\n<p>RBAC configuration allows defining roles and groups. Argo CD has two pre-defined roles:</p>\n<ul>\n<li><code>role:readonly</code> - read-only access to all resources</li>\n<li><code>role:admin</code> - unrestricted access to all resources</li>\n</ul>\n<p>These role definitions can be seen in <a href="../../assets/builtin-policy.csv">builtin-policy.csv</a></p>\n<p>Additional roles and groups can be configured in <code>argocd-rbac-cm</code> ConfigMap. The example below\nconfigures a custom role, named <code>org-admin</code>. The role is assigned to any user which belongs to\n<code>your-github-org:your-team</code> group. All other users get the default policy of <code>role:readonly</code>,\nwhich cannot modify Argo CD settings.</p>\n<p><em>ConfigMap <code>argocd-rbac-cm</code> example:</em></p>\n<pre><code class="language-yaml">apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-rbac-cm\ndata:\n  policy.default: role:readonly\n  policy.csv: |\n    p, role:org-admin, applications, *, */*, allow\n    p, role:org-admin, clusters, get, *, allow\n    p, role:org-admin, repositories, get, *, allow\n    p, role:org-admin, repositories, create, *, allow\n    p, role:org-admin, repositories, update, *, allow\n    p, role:org-admin, repositories, delete, *, allow\n\n    g, your-github-org:your-team, role:org-admin\n</code></pre>',docPath:"argo-cd/docs/operator-manual/rbac",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-operator-manual-rbac-html-3ac2c14e483bc311cecd.js.map