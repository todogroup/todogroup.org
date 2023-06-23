serve:
	hugo server \
		--disableFastRender \
		--buildDrafts \
		--buildFuture \
		--ignoreCache

production-build:
	git submodule update --init --recursive
	hugo \
		--minify

preview-build:
	git submodule update --init --recursive
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify
