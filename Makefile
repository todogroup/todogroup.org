NODE_BIN     =  node_modules/.bin
HUGO         =  hugo
GULP         := $(NODE_BIN)/gulp
CONCURRENTLY := $(NODE_BIN)/concurrently

develop-assets:
	$(GULP)

develop-site-content:
	$(HUGO) server \
		--disableFastRender \
		--ignoreCache \
		--baseURL "localhost"
