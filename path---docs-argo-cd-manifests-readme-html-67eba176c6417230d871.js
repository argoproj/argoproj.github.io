webpackJsonp([8118659211722],{588:function(e,l){e.exports={pathContext:{docHtml:'<h1>Argo CD Installation Manifests</h1>\n<p>Four sets of installation manifests are provided:</p>\n<h2>Normal Installation:</h2>\n<ul>\n<li>\n<p><a href="install.yaml">install.yaml</a> - Standard Argo CD installation with cluster-admin access. Use this\nmanifest set if you plan to use Argo CD to deploy applications in the same cluster that Argo CD runs\nin (i.e. kubernetes.svc.default). Will still be able to deploy to external clusters with inputted\ncredentials.</p>\n</li>\n<li>\n<p><a href="namespace-install.yaml">namespace-install.yaml</a> - Installation of Argo CD which requires only\nnamespace level privileges (does not need cluster roles). Use this manifest set if you do not\nneed Argo CD to deploy applications in the same cluster that Argo CD runs in, and will rely solely\non inputted cluster credentials. An example of using this set of manifests is if you run several\nArgo CD instances for different teams, where each instance will bedeploying applications to\nexternal clusters. Will still be possible to deploy to the same cluster (kubernetes.svc.default)\nwith inputted credentials (i.e. <code>argocd cluster add &#x3C;CONTEXT> --in-cluster</code>).</p>\n</li>\n</ul>\n<h2>High Availability:</h2>\n<ul>\n<li>\n<p><a href="ha/install.yaml">ha/install.yaml</a> - the same as install.yaml but with multiple replicas for\nsupported components.</p>\n</li>\n<li>\n<p><a href="ha/namespace-install.yaml">ha/namespace-install.yaml</a> - the same as namespace-install.yaml but\nwith multiple replicas for supported components.</p>\n</li>\n</ul>',docPath:"argo-cd/manifests/readme",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-manifests-readme-html-67eba176c6417230d871.js.map