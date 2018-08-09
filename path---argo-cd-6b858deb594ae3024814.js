webpackJsonp([61974767242738],{478:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{fileAbsolutePath:".tmp/docs/argo-cd/README.md",html:'<h1>Argo CD - Declarative Continuous Delivery for Kubernetes</h1>\n<h2>What is Argo CD?</h2>\n<p>Argo CD is a declarative, continuous delivery for Kubernetes.</p>\n<p><img src="/argo-cd/docs/argocd-ui.gif" alt="Argo CD UI"></p>\n<h2>Why Argo CD?</h2>\n<p>Application definitions, configurations, and environments should be declarative and version controlled.\nApplication deployment and lifecycle management should be automated, auditable, and easy to understand.</p>\n<h2>Getting Started</h2>\n<p>Follow our <a href="docs/getting_started.html">getting started guide</a>. Further <a href="docs/">documentation</a>\nis provided for additional features.</p>\n<h2>How it works</h2>\n<p>Argo CD follows the <strong>GitOps</strong> pattern of using git repositories as the source of truth for defining\nthe desired application state. Kubernetes manifests can be specified in several ways:</p>\n<ul>\n<li><a href="https://ksonnet.io">ksonnet</a> applications</li>\n<li><a href="https://helm.sh">helm</a> charts</li>\n<li>Simple directory of YAML/json manifests</li>\n</ul>\n<p>Argo CD automates the deployment of the desired application states in the specified target environments.\nApplication deployments can track updates to branches, tags, or pinned to a specific version of\nmanifests at a git commit. See <a href="docs/tracking_strategies.html">tracking strategies</a> for additional\ndetails about the different tracking strategies available.</p>\n<h2>Architecture</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 95.28936742934052%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADNklEQVQ4y41US28bVRT2j2TNApYIiQ0LFiyQKtQFrCqBWGaBKC1QkSYuUoppMXkQEhJM49gzuJ732zPXM/ZMxvP4OPfaHiZQBEc6uvcezfnO6zvTwUbqum6Uy9XVFSzLwjeP92HZjrBdRzmmhg15PIYkSUiSBGVZ3vLvtB9cqqoSp+M4ePvd9/DGW+/g/Tt3EUYMclLhpW5CIsDhcAhVVbFarRpALhtA3DJuz4/vfYLXXn8TH9z9CDFlo6WAZrvQVAV/TCYwTRPz+RxpmjZ+nQ1UA5Lf3CAIAoRhiIw+7P34EzzfFzbG2D8C85K3VTWAFf+grpCSfeoGGF9fw6DoW0fRAtvGiOw3FBDtshrZ9LDtlK8K6KYFz3Ub27rpNWVRg1F5vh+s7ZRV1RrkrR5qmobLy0uURSEmx0so6M5BOJgfV1CCEnpYYepT0FkFk6rnb8UvhU5J2bJaAx4cHGBnZ0dE4L3iyimTxDFNNyKAErN5iihOoQYF3IBhqhrwgggavSW3hOSUMMISnSzPcf/BQ3T397FcLgWY53nQdQOLRYLZLITNSppmjDiewwwLAgrx68UlXGoND/BpN8Fn3yVrQOY6iEh/JyKrioJXic0quB4P5IvyrDBHQJz04xVe6Dk+/JLhzn2Glx4Bur/0Eb84x8PHXezv7Qmi6roOWZaRZZngnxUVIvssXYgseGZnpycwdRVeXOJYynEi5yJw56rXxeS0j5PnuxgOjlCUNRRlitFoJCjCQTUaiOZnMGc31KsCipdB0iMozgIyvWW3wphOnZf8dHcPh70e+l99gUH/2StLjomgzhwwoxIO4/cabgxx8v4as5W4p3mzKZzdgiGo27vd4hcvdyKPYVsGNl8JO4tCGLrWvDsNMddcv0XUNmFjotBIkqEbpuBptbEvEgbPsTYZtQFbzk2Av/2BGGWXLxfNqklmgUdHCzw9j/HDYCVsHfyHNKAc0LdRpktsl3WsZ/j2MML35wxPfg7+Wr1/A9qCzbME7uAC4eEJLobXcCYSVJrq58+WOB6m+Lo/J8AIj46z/wcY0Iaws1Mse89xNhjAnVAv7RgPeiYOf/Ox27fQO/fRPXLwJyuinDkYTmlYAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Argo CD Architecture"\n        title=""\n        src="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png"\n        srcset="/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-1a291.png 148w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-2bc4a.png 295w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-fb8a0.png 590w,\n/static/argocd_architecture-643caa8250f7d6d582497dca23c685f2-d0cc3.png 743w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Argo CD is implemented as a kubernetes controller which continuously monitors running applications\nand compares the current, live state against the desired target state (as specified in the git repo).\nA deployed application whose live state deviates from the target state is considered <code>OutOfSync</code>.\nArgo CD reports &#x26; visualizes the differences, while providing facilities to automatically or\nmanually sync the live state back to the desired target state. Any modifications made to the desired\ntarget state in the git repo can be automatically applied and reflected in the specified target\nenvironments.</p>\n<p>For additional details, see <a href="docs/architecture.html">architecture overview</a>.</p>\n<h2>Features</h2>\n<ul>\n<li>Automated deployment of applications to specified target environments</li>\n<li>Continuous monitoring of deployed applications</li>\n<li>Automated or manual syncing of applications to its desired state</li>\n<li>Web and CLI based visualization of applications and differences between live vs. desired state</li>\n<li>Rollback/Roll-anywhere to any application state committed in the git repository</li>\n<li>Health assessment statuses on all components of the application</li>\n<li>SSO Integration (OIDC, OAuth2, LDAP, SAML 2.0, GitLab, Microsoft, LinkedIn)</li>\n<li>Webhook Integration (GitHub, BitBucket, GitLab)</li>\n<li>PreSync, Sync, PostSync hooks to support complex application rollouts (e.g.blue/green &#x26; canary upgrades)</li>\n<li>Parameter overrides for overriding ksonnet/helm parameters in git</li>\n</ul>\n<h2>Development Status</h2>\n<ul>\n<li>Argo CD is being used in production to deploy SaaS services at Intuit</li>\n</ul>\n<h2>Roadmap</h2>\n<ul>\n<li>Audit trails for application events and API calls</li>\n<li>Service account/access key management for CI pipelines</li>\n<li>Revamped UI</li>\n<li>Customizable application actions</li>\n</ul>'}}]}},pathContext:{}}}});
//# sourceMappingURL=path---argo-cd-6b858deb594ae3024814.js.map