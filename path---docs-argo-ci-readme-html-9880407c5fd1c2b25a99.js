webpackJsonp([0xca951fbda3ce],{562:function(o,e){o.exports={pathContext:{docHtml:'<p><strong>PROJECT IS IN EARLY DEVELOPMENT STAGE</strong></p>\n<h1>Argo CI</h1>\n<p>Argo CI is a continuous integration and deployment system powered by <a href="http://argoproj.io">Argo</a> workflow engine for Kubernetes. Argo CI provides integration with SCM\n( currently only Github is supported) and automatically triggers CI workflow defined using <a href="https://applatix.com/open-source/argo/docs/argo_v2_yaml.html">Argo YAML DSL</a>.</p>\n<h2>Deploy Argo CI to your kubernetes cluster</h2>\n<p>Argo CI might be installed using Helm:</p>\n<pre><code>helm repo add argo https://argoproj.github.io/argo-helm/\nhelm install argo/argo-ci --name argo-ci\n</code></pre>\n<p>The <code>argo-ci</code> helm chart installs three deployments:</p>\n<ul>\n<li>Argo workflow controller</li>\n<li>Argo UI deployment</li>\n<li>Argo CI deployment</li>\n</ul>\n<p>Argo UI and Argo CI are available externally via load balancer kubernetes services.</p>\n<h2>Configure integration with Github</h2>\n<p>Following steps are required to configure integration:</p>\n<ul>\n<li>For security reasons Argo CI configuration UI is not available externally. Easiest way to access it is to use port forwarding: <code>kubectl port-forward &#x3C;argo-ci-pod> 8002:8002</code>.\nUI should be available via <a href="http://localhost:8002">http://localhost:8002</a>.</li>\n<li>Configure external Argo UI URL using Argo CI configuration UI.</li>\n<li>Add required repositories using Argo UI:</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/configuration-77d616d1eac379c21c4248ca2a749967-fb205.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.481363152289674%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1ElEQVQY05WRbQ+CMAyE+f//zpBoIg6NyHxBEmEIrO04K4iJ37DJJWuzPrnbojiOkWUZkmSLzXoNYwxEAuYahgH/VHTYH1DX9diEEBTGYCYwsfbyRo7QpYrO1uJ6uSDPc9yuBaqHQ995tG3343Sxw3R/xMackJodtskK9zKFc2d17VDVJZ6tBclNZyWqyo0p3k689zpzX2fMDCJCZDRy08uHT+qqUT1VpBc6sJ7D0OpCrz3r8gQUkREwA6fnkilyUdw1cq+f41UEaxn5idE0888sj/wC0l7TYTB+uZcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Configuration UI"\n        title="Configuration UI"\n        src="/static/configuration-77d616d1eac379c21c4248ca2a749967-fb8a0.png"\n        srcset="/static/configuration-77d616d1eac379c21c4248ca2a749967-1a291.png 148w,\n/static/configuration-77d616d1eac379c21c4248ca2a749967-2bc4a.png 295w,\n/static/configuration-77d616d1eac379c21c4248ca2a749967-fb8a0.png 590w,\n/static/configuration-77d616d1eac379c21c4248ca2a749967-526de.png 885w,\n/static/configuration-77d616d1eac379c21c4248ca2a749967-fb205.png 939w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>\n<p>Create webhook using <a href="https://developer.github.com/webhooks/creating/#setting-up-a-webhook">Github UI</a>:</p>\n<ul>\n<li>set Payload URL to <code>http&#x3C;ArgoCiDomain>/api/webhook/github</code></li>\n<li>set Content Type to <code>application/json</code></li>\n<li>set your Secret token values</li>\n</ul>\n</li>\n<li>Create build workflow and save at <code>.argo-ci/ci.yaml</code> inside of your project repository. If workflow has parameters named <code>revision</code> and <code>repo</code> then Argo CI will automatically set values for these parameters.</li>\n</ul>\n<h2>Build and debug</h2>\n<p>To build project locally install <a href="https://nodejs.org">nodejs</a> and <a href="https://yarnpkg.com">yarn</a>. Once you install npm dependencies using <code>yarn install</code> you are ready to build and\ndebug project locally:</p>\n<ul>\n<li>Execute <code>yarn build</code> to build project. Command stores build results in <code>./dist</code> directory.</li>\n<li>Execute <code>yarn start</code> to start service locally.</li>\n</ul>',docPath:"argo-ci/readme",proj:"argo-ci"}}}});
//# sourceMappingURL=path---docs-argo-ci-readme-html-9880407c5fd1c2b25a99.js.map