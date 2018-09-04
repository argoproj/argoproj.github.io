webpackJsonp([83372189206993],{545:function(e,o){e.exports={pathContext:{docHtml:'<h1>Argo - The Workflow Engine for Kubernetes</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 458px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.12663755458516%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVQoz3WSTWsaURSG58+4838US/fduXRjBVsq1RRBLC204MKUikhLF3blMnFTceEigXTRjdRFMglNDBrrpGp0xvl0ns5cdarBHDicc+957/m455Vc18UXd7Fg4alvxXl979mHdDO+9iXfUU2Hrg5n06XVvPN98GJVaFNs2w78dVwyLYffmsvVcYM/xZfIxy1kFSzLCcCDwSAooGkak8mE2Wwm7hRFQdf1IKnUm9qc9RX6+3vMnj/m+mOOX8Mp/TtTgMrlMrFYjFqtRrFYJJ1Ok0qlyGaz1Ot1kskkmUyG0Wi07LDrjXl1fsH1yRHq53d0f/7g9PSCG6/oZPSXaDRKu90mHA6Ty+VEgWq1SqVSIRQK0Wq1RMJGo7FMaHiTXSp33H7a4zL9lNsvbzmfmBirkQ8ODkkkEqKTZrOJLMsiQSQSoVQqkc/nKRQK//9QLGWqcvP+GSfxJyj7r7ylbG96UzqdDvF4XBQZDodbsWDLGHO08mvmLx4xr37wfxd3BRBUWtl1F71ej/F4LHzHcQJM0KFrWxjfv6F+fYN5dLikyw4O3qfPYgdnpeCxqePOVVzL2ObgAwTe5fvyD6Ll0ylRxLA1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Argo Image"\n        title=""\n        src="/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png"\n        srcset="/static/argo-a099ca3512e83579d67b0aa9ede5261a-cd6d8.png 148w,\n/static/argo-a099ca3512e83579d67b0aa9ede5261a-56f1f.png 295w,\n/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png 458w"\n        sizes="(max-width: 458px) 100vw, 458px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>News</h2>\n<p>We are excited to welcome <a href="https://cyrusbio.com/">Cyrus Biotechnology</a>, <a href="https://www.google.com/intl/en/about/our-company/">Google</a> and <a href="http://www.nvidia.com/">NVIDIA</a> as corporate members of the Argo Community! They have been active users of Argo for some time now and have decided to increase their participation in both the use and development of Argo. If you actively use Argo at your company and believe that your company may be interested in actively participating in the Argo Community, please ask a representative to contact saradhi_sreegiriraju@intuit.com for additional information.</p>\n<p>Updated community documents, including CLAs, are available <a href="https://github.com/argoproj/argo/tree/master/community">here</a>. These documents are essentially identical to those used by CNCF projects such as Kubernetes and are designed to protect Argo\'s contributors, users and Intuit, the current custodian of the Argo Project.</p>\n<p>We will be scheduling the first Argo Community Meeting for the beginning of May to get to know each other, review the current Argo projects, and gather feedback for future projects. Please stay tuned for additional details.</p>\n<h2>What is Argo?</h2>\n<p>Argo is an open source container-native workflow engine for getting work done on Kubernetes. Argo is implemented as a Kubernetes CRD (Custom Resource Definition).</p>\n<ul>\n<li>Define workflows where each step in the workflow is a container.</li>\n<li>Model multi-step workflows as a sequence of steps or capture the dependencies between tasks using a graph (DAG).</li>\n<li>Easily leverage Kubernetes to run compute intensive jobs like data processing or machine learning jobs in a fraction of the time using Argo workflows.</li>\n<li>Run rich CI/CD pipelines using Docker-in-Docker, built-in artifact management, secret management and native access to other Kubernetes resources.</li>\n</ul>\n<h2>Why Argo?</h2>\n<ul>\n<li>Argo is designed from the ground up for containers without the overhead and limitations of legacy VM and server-based environments.</li>\n<li>Argo is cloud agnostic and can run on any kubernetes cluster.</li>\n<li>Argo with Kubernetes puts a cloud-scale supercomputer at your fingertips.</li>\n<li>We want to make it as easy to run Argo workflows on Kubernetes as it is to run jobs on you laptop.</li>\n</ul>\n<h2>Documentation</h2>\n<ul>\n<li><a href="demo.html">Get started here</a></li>\n<li><a href="examples/README.html">How to write Argo workflow specs</a></li>\n<li><a href="ARTIFACT_REPO.html">How to configure your artifact repository</a></li>\n</ul>\n<h2>Who uses Argo?</h2>\n<p>As the Argo Community grows, we\'d like to keep track of our users. Please send a PR with your organization name.</p>\n<p>Currently <strong>officially</strong> using Argo:</p>\n<ol>\n<li><a href="https://cyrusbio.com/">Cyrus Biotechnology</a></li>\n<li><a href="https://gladly.com/">Gladly</a></li>\n<li><a href="https://www.google.com/intl/en/about/our-company/">Google</a></li>\n<li><a href="https://www.intuit.com/">Intuit</a></li>\n<li><a href="https://www.nvidia.com/">NVIDIA</a></li>\n</ol>\n<h2>Presentations</h2>\n<ul>\n<li>TGI Kubernetes with Joe Beda: <a href="https://www.youtube.com/watch?v=M_rxPPLG8pU&#x26;start=859">Argo workflow system</a></li>\n</ul>\n<h2>Community Blogs</h2>\n<ul>\n<li><a href="http://dev.matt.hillsdon.net/2018/03/24/argo-integration-review.html">Argo integration review</a></li>\n<li>Please share your own thoughs</li>\n</ul>\n<h2>Project Resources</h2>\n<ul>\n<li>Argo GitHub:  <a href="https://github.com/argoproj">https://github.com/argoproj</a></li>\n<li>Argo Slack:   <a href="https://join.slack.com/t/argoproj/shared_invite/enQtMzExODU3MzIyNjYzLTA5MTFjNjI0Nzg3NzNiMDZiNmRiODM4Y2M1NWQxOGYzMzZkNTc1YWVkYTZkNzdlNmYyZjMxNWI3NjY2MDc1MzI">click here to join</a></li>\n<li>Argo website: <a href="https://argoproj.github.io/argo-site">https://argoproj.github.io/argo-site</a></li>\n<li>Argo forum:   <a href="https://groups.google.com/forum/#!forum/argoproj">https://groups.google.com/forum/#!forum/argoproj</a></li>\n</ul>',docPath:"argo/readme",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-1c15dfe904e6a0bb76e3.js.map