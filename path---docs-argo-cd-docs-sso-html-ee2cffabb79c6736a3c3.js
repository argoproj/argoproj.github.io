webpackJsonp([30350829730045],{494:function(e,t){e.exports={pathContext:{docHtml:'<h1>SSO Configuration</h1>\n<h2>Overview</h2>\n<p>ArgoCD embeds and bundles <a href="https://github.com/coreos/dex">Dex</a> as part of its installation, for the\npurpose of delegating authentication to an external identity provider. Multiple types of identity\nproviders are supported (OIDC, SAML, LDAP, GitHub, etc...). SSO configuration of ArgoCD requires\nediting the <code>argocd-cm</code> ConfigMap with\n<a href="https://github.com/coreos/dex/tree/master/Documentation/connectors">Dex connector</a> settings. </p>\n<p>This document describes how to configure ArgoCD SSO using GitHub (OAuth2) as an example, but the\nsteps should be similar for other identity providers.</p>\n<h3>1. Register the application in the identity provider</h3>\n<p>In GitHub, register a new application. The callback address should be the <code>/api/dex/callback</code>\nendpoint of your ArgoCD URL (e.g. <a href="https://argocd.example.com/api/dex/callback">https://argocd.example.com/api/dex/callback</a>).</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-89d84.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 71.26137841352406%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABs0lEQVQ4y4VTuZLUMBT0N29MDiH/QEBMwG9AFQm1DKzn8iGPL1mWJZ9NS3ipYVnPvKoeeQK1+3gOhBB4/LFDnKRIUoFwf8CeOJ7O2P38hadwD2MM3CzLchdB27bIiwJSSrhnd7nrOo9Wa39O04TnuUuY5wVVHJBdchLq9RIwO/BnIsZxQj+M6FaltyZQVJVmF6oxaBqFoqxQVjUa1XoiDyoceFrbr0q2lQZN0yBldoKkwzD4t8zz7NVdW7yel///UVjVkkUcWUKEKBE4Rwkq2UB3FrYfvNVrYFluknqFQmS4MEun9DlLSfvOrrs4r1iWbdV/CWuqSdKVkCukmN10Zfnl3LLrCZ0t1XYebWegdIeqblBLxSLG/0K/R+xbduoutFqUpYfm7mkSG2tfVXjLOkupcTidEMUxjueIpcRccsWFNiTVzHH0rU/T7KO4t+CB0RZFWqLMuH+iRpGVJE9IHiM8ZSglI1ADpGIcLMupt6vy12wHaZfje/2EXXPAowwRtQJD/+fL6Lklhs/aTDxHT+RisH2/rfDj/jMevrzFm2/v8fD1HT6En1ArEg3u+91udIvwN9+bQLC8NcUZAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Register OAuth App"\n        title="Register OAuth App"\n        src="/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-fb8a0.png"\n        srcset="/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-1a291.png 148w,\n/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-2bc4a.png 295w,\n/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-fb8a0.png 590w,\n/static/register-app-31f3a17ede6cde0d9b51d4563c826e9f-89d84.png 769w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>After registering the app, you will receive an OAuth2 client ID and secret. These values will be\ninputted into the ArgoCD configmap.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-51273.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.421875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABUUlEQVQoz41S7WrDMBDL+7/e2I/RMda1q2PHn3HsxElTTUnZBqW0ORB3HLZ8J7lyzmO3e4f3HrdxuVwe4l5U+/0HDt8CMY8oZcQwFPT9sNYzL83z5T//1fNKWMYRKeUVHTFNZ1Rvry8QysFnoI0JbdvCWosuRjyLlHucaoVaNjgJicxBqq5LMEav0FpjkSDGDjaOaEKBdAU2ZPb5qA9wvoW2DkobGJ61LsBYzzpg4FYk5GUeaHhgySPXWFA4/jjNXGtmPnOdae270KIxDrLRK7E2V/JaafSUq/IhIJJ00e3Gkhtsi0oqhcPxBM+XH7m7xfUFlea4QgjkRC2p4aLfvdhCthJaCnv4PkFIhZi66/pDj7yg79GXsn6TzRN6Cis+D5D8i4qr18xaNZCsxdcRNfNixi/hUw0L/1KSGpnESRkMIaIk9uhapoOpMTjT5a0T/gCd6VmDbn7POwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="OAuth2 Client Config"\n        title="OAuth2 Client Config"\n        src="/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-fb8a0.png"\n        srcset="/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-1a291.png 148w,\n/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-2bc4a.png 295w,\n/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-fb8a0.png 590w,\n/static/oauth2-config-c4f004b1eddb67a9ee5de505c50c7948-51273.png 768w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>2. Configure ArgoCD for SSO</h3>\n<p>Edit the argocd-cm configmap:</p>\n<pre><code>kubectl edit configmap argocd-cm\n</code></pre>\n<ul>\n<li>In the <code>url</code> key, input the base URL of ArgoCD. In this example, it is <a href="https://argocd.example.com">https://argocd.example.com</a></li>\n<li>In the <code>dex.config</code> key, add the <code>github</code> connector to the <code>connectors</code> sub field. See Dex\'s\n<a href="https://github.com/coreos/dex/blob/master/Documentation/connectors/github.html">GitHub connector</a>\ndocumentation for explanation of the fields. A minimal config should populate the clientID,\nclientSecret generated in Step 1.</li>\n<li>You will very likely want to restrict logins to one ore more GitHub organization. In the\n<code>connectors.config.orgs</code> list, add one or more GitHub organizations. Any member of the org will\nthen be able to login to ArgoCD to perform management tasks.</li>\n</ul>\n<pre><code>data:\n  url: https://argocd.example.com\n\n  dex.config: |\n    connectors:\n      # GitHub example\n      - type: github\n        id: github\n        name: GitHub\n        config:\n          clientID: aabbccddeeff00112233\n          clientSecret: $dex.github.clientSecret\n          orgs:\n          - name: your-github-org\n\n      # GitHub enterprise example\n      - type: github\n        id: acme-github\n        name: Acme GitHub\n        config:\n          hostName: github.acme.com\n          clientID: abcdefghijklmnopqrst\n          clientSecret: $dex.acme.clientSecret\n          orgs:\n          - name: your-github-org\n\n      # OIDC example (e.g. Okta)\n      - type: oidc\n        id: okta\n        name: Okta\n        config:\n          issuer: https://dev-123456.oktapreview.com\n          clientID: aaaabbbbccccddddeee\n          clientSecret: $dex.okta.clientSecret\n</code></pre>\n<p>After saving, the changes should take affect automatically.</p>\n<p>NOTES:</p>\n<ul>\n<li>Any values which start with \'$\' will look to a key in argocd-secret of the same name (minus the $),\nto obtain the actual value. This allows you to store the <code>clientSecret</code> as a kubernetes secret.</li>\n<li>There is no need to set <code>redirectURI</code> in the <code>connectors.config</code> as shown in the dex documentation.\nArgoCD will automatically use the correct <code>redirectURI</code> for any OAuth2 connectors, to match the\ncorrect external callback URL (e.g. <a href="https://argocd.example.com/api/dex/callback">https://argocd.example.com/api/dex/callback</a>)</li>\n</ul>',docPath:"argo-cd/docs/sso",proj:"argo-cd"}}}});
//# sourceMappingURL=path---docs-argo-cd-docs-sso-html-ee2cffabb79c6736a3c3.js.map