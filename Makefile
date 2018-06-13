NODE_BIN     =  node_modules/.bin
HUGO         =  hugo
GULP         := $(NODE_BIN)/gulp
CONCURRENTLY := $(NODE_BIN)/concurrently

netlify-build: print-hugo-version build-assets build-site

print-hugo-version:
	$(HUGO) version

build-assets:
	$(GULP) build

build-site:
	$(HUGO)

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
