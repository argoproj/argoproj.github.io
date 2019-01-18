webpackJsonp([45014422755267],{544:function(e,t){e.exports={pathContext:{docHtml:'<h1>Tracking and Deployment Strategies</h1>\n<p>An Argo CD application spec provides several different ways of track kubernetes resource manifests in\ngit. This document describes the different techniques and the means of deploying those manifests to\nthe target environment.</p>\n<h2>HEAD / Branch Tracking</h2>\n<p>If a branch name, or a symbolic reference (like HEAD) is specified, Argo CD will continually compare\nlive state against the resource manifests defined at the tip of the specified branch or the\ndereferenced commit of the symbolic reference.</p>\n<p>To redeploy an application, a user makes changes to the manifests, and commit/pushes those the\nchanges to the tracked branch/symbolic reference, which will then be detected by Argo CD controller.</p>\n<h2>Tag Tracking</h2>\n<p>If a tag is specified, the manifests at the specified git tag will be used to perform the sync\ncomparison. This provides some advantages over branch tracking in that a tag is generally considered\nmore stable, and less frequently updated, with some manual judgement of what constitutes a tag.</p>\n<p>To redeploy an application, the user uses git to change the meaning of a tag by retagging it to a\ndifferent commit SHA. Argo CD will detect the new meaning of the tag when performing the\ncomparison/sync.</p>\n<h2>Commit Pinning</h2>\n<p>If a git commit SHA is specified, the application is effectively pinned to the manifests defined at\nthe specified commit. This is the most restrictive of the techniques and is typically used to\ncontrol production environments.</p>\n<p>Since commit SHAs cannot change meaning, the only way to change the live state of an application\nwhich is pinned to a commit, is by updating the tracking revision in the application to a different\ncommit containing the new manifests. Note that <a href="parameters.html">parameter overrides</a> can still be set\non an application which is pinned to a revision.</p>\n<h2>Automated Sync</h2>\n<p>In all tracking strategies, the application has the option to sync automatically. If <a href="auto_sync.html">auto-sync</a>\nis configured, the new resources manifests will be applied automatically -- as soon as a difference\nis detected between the target state (git) and live state. If auto-sync is disabled, a manual sync\nwill be needed using the Argo UI, CLI, or API.</p>\n<h2>Parameter Overrides</h2>\n<p>Note that in all tracking strategies, any <a href="parameters.html">parameter overrides</a> set in the\napplication instance take precedence over the git state.</p>',docPath:"argo-cd/docs/tracking_strategies",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-tracking-strategies-html-5b3679ba627823dbeb22.js.map