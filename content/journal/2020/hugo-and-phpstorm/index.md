---
title: "Hugo and Phpstorm"
date: 2020-10-01T19:05:42+07:00
---


{{< highlight json >}}
{
  "scripts": {
    "serve": "hugo server --disableFastRender --i18n-warnings --navigateToChanged  --templateMetrics --templateMetricsHints --verbose --verboseLog --path-warnings --buildDrafts --buildExpired --buildFuture --watch --enableGitInfo --forceSyncStatic --log true --logFile hugo.log --verbose",
    "hugo": "hugo --i18n-warnings --templateMetrics --templateMetricsHints --verbose --verboseLog --path-warnings --enableGitInfo --log true --logFile hugo.log --verbose"
  }
}
{{< / highlight >}}

{{< highlight json >}}
{
  "scripts": {
    "serve": "hugo server --disableFastRender --i18n-warnings --navigateToChanged  --templateMetrics --templateMetricsHints --verbose --verboseLog --path-warnings --buildDrafts --buildExpired --buildFuture --watch --enableGitInfo --forceSyncStatic --log true --logFile hugo.log --verbose",
    "hugo": "hugo --i18n-warnings --templateMetrics --templateMetricsHints --verbose --verboseLog --path-warnings --enableGitInfo --log true --logFile hugo.log --verbose"
  }
}
{{< / highlight >}}
