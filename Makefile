NODE_BIN     =  node_modules/.bin
HUGO         =  hugo
GULP         := $(NODE_BIN)/gulp
CONCURRENTLY := $(NODE_BIN)/concurrently

build-assets:
	$(GULP) build

clean:
	rm -rf public/

develop-assets:
	$(GULP)

develop-site-content:
	$(HUGO) server \
		--disableFastRender \
		--ignoreCache \
		--baseURL "localhost"

develop-site: clean build-assets
	$(CONCURRENTLY) "make develop-assets" "make develop-site-content"
