webpackJsonp([0xac16a663e4d2],{654:function(e,o){e.exports={pathContext:{docHtml:'<h1>Docker Hub Automated Build Hooks</h1>\n<p>This directory contains Docker Hub <a href="https://docs.docker.com/docker-hub/builds/advanced/">Automated Build</a> hooks.\nThis is needed since we publish multiple images as part of a single build:</p>\n<ul>\n<li>argoproj/workflow-controller:latest</li>\n<li>argoproj/argoexec:latest</li>\n<li>argoproj/argocli:latest</li>\n</ul>\n<p>It relies the DOCKER<em>REPO and DOCKER</em>TAG environment variables that are set by Docker Hub during\nthe build.</p>\n<p>Hooks can be tested using:</p>\n<pre><code>DOCKER_REPO=index.docker.io/my-docker-username/workflow-controller DOCKER_TAG=latest ./hooks/build\nDOCKER_REPO=index.docker.io/my-docker-username/workflow-controller DOCKER_TAG=latest ./hooks/push\n</code></pre>',docPath:"argo/hooks/readme",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-hooks-readme-html-408e9aed0c44cdf588ca.js.map