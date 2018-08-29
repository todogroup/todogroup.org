HUGO = hugo

develop:
	$(HUGO) server \
		--disableFastRender \
		--buildDrafts \
		--buildFuture \
		--ignoreCache
