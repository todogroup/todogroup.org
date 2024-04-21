#!/bin/bash

npm install
npm run build
hugo serve --logLevel info --configDir=config --buildDrafts --buildFuture \
  --ignoreCache --disableFastRender --gc  --printI18nWarnings \
  --printMemoryUsage --printPathWarnings --printUnusedTemplates \
  --templateMetrics --templateMetricsHints --bind 0.0.0.0
