webpackJsonp([0xe987582c1f45],{498:function(e,n){e.exports={pathContext:{docHtml:'<h1>Argo CD - Architectural Overview</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 95.28936742934052%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADNklEQVQ4y41US28bVRT2j2TNApYIiQ0LFiyQKtQFrCqBWGaBKC1QkSYuUoppMXkQEhJM49gzuJ732zPXM/ZMxvP4OPfaHiZQBEc6uvcezfnO6zvTwUbqum6Uy9XVFSzLwjeP92HZjrBdRzmmhg15PIYkSUiSBGVZ3vLvtB9cqqoSp+M4ePvd9/DGW+/g/Tt3EUYMclLhpW5CIsDhcAhVVbFarRpALhtA3DJuz4/vfYLXXn8TH9z9CDFlo6WAZrvQVAV/TCYwTRPz+RxpmjZ+nQ1UA5Lf3CAIAoRhiIw+7P34EzzfFzbG2D8C85K3VTWAFf+grpCSfeoGGF9fw6DoW0fRAtvGiOw3FBDtshrZ9LDtlK8K6KYFz3Ub27rpNWVRg1F5vh+s7ZRV1RrkrR5qmobLy0uURSEmx0so6M5BOJgfV1CCEnpYYepT0FkFk6rnb8UvhU5J2bJaAx4cHGBnZ0dE4L3iyimTxDFNNyKAErN5iihOoQYF3IBhqhrwgggavSW3hOSUMMISnSzPcf/BQ3T397FcLgWY53nQdQOLRYLZLITNSppmjDiewwwLAgrx68UlXGoND/BpN8Fn3yVrQOY6iEh/JyKrioJXic0quB4P5IvyrDBHQJz04xVe6Dk+/JLhzn2Glx4Bur/0Eb84x8PHXezv7Qmi6roOWZaRZZngnxUVIvssXYgseGZnpycwdRVeXOJYynEi5yJw56rXxeS0j5PnuxgOjlCUNRRlitFoJCjCQTUaiOZnMGc31KsCipdB0iMozgIyvWW3wphOnZf8dHcPh70e+l99gUH/2StLjomgzhwwoxIO4/cabgxx8v4as5W4p3mzKZzdgiGo27vd4hcvdyKPYVsGNl8JO4tCGLrWvDsNMddcv0XUNmFjotBIkqEbpuBptbEvEgbPsTYZtQFbzk2Av/2BGGWXLxfNqklmgUdHCzw9j/HDYCVsHfyHNKAc0LdRpktsl3WsZ/j2MML35wxPfg7+Wr1/A9qCzbME7uAC4eEJLobXcCYSVJrq58+WOB6m+Lo/J8AIj46z/wcY0Iaws1Mse89xNhjAnVAv7RgPeiYOf/Ox27fQO/fRPXLwJyuinDkYTmlYAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Argo CD Architecture"\n        title=""\n        src="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png"\n        srcset="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-1a291.png 148w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-2bc4a.png 295w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png 590w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png 743w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Components</h2>\n<h3>API Server</h3>\n<p>The API server is a gRPC/REST server which exposes the API consumed by the Web UI, CLI, and CI/CD\nsystems. It has the following responsibilities:</p>\n<ul>\n<li>application management and status reporting</li>\n<li>invoking of application operations (e.g. sync, rollback, user-defined actions)</li>\n<li>repository and cluster credential management (stored as K8s secrets)</li>\n<li>authentication and auth delegation to external identity providers</li>\n<li>RBAC enforcement</li>\n<li>listener/forwarder for git webhook events</li>\n</ul>\n<h3>Repository Server</h3>\n<p>The repository server is an internal service which maintains a local cache of the git repository\nholding the application manifests. It is responsible for generating and returning the Kubernetes\nmanifests when provided the following inputs:</p>\n<ul>\n<li>repository URL</li>\n<li>git revision (commit, tag, branch)</li>\n<li>application path</li>\n<li>template specific settings: parameters, ksonnet environments, helm values.yaml</li>\n</ul>\n<h3>Application Controller</h3>\n<p>The application controller is a Kubernetes controller which continuously monitors running\napplications and compares the current, live state against the desired target state (as specified in\nthe git repo). It detects <code>OutOfSync</code> application state and optionally takes corrective action. It\nis responsible for invoking any user-defined hooks for lifcecycle events (PreSync, Sync, PostSync)</p>\n<h3>Application CRD (Custom Resource Definition)</h3>\n<p>The Application CRD is the Kubernetes resource object representing a deployed application instance\nin an environment. It is defined by two key pieces of information:</p>\n<ul>\n<li><code>source</code> reference to the desired state in git (repository, revision, path, environment)</li>\n<li><code>destination</code> reference to the target cluster and namespace.</li>\n</ul>\n<p>An example spec is as follows:</p>\n<pre><code>spec:\n  project: default\n  source:\n    repoURL: https://github.com/argoproj/argocd-example-apps.git\n    targetRevision: HEAD\n    path: guestbook\n    environment: default\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: default\n</code></pre>',docPath:"argo-cd/docs/architecture",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-architecture-html-6ab2e93a49ae7e319367.js.map