$(VERBOSE).SILENT:
.DEFAULT_GOAL := usage

.PHONY: usage
usage:
	echo "Usage:"
	echo "=========="
	echo "make usage - displays Makefile target info"
	echo "make dev - hot reloads packs on file save"
	echo "make prod - generates production packs for release"

.PHONY: dev
dev:
	npx gulp development
	
.PHONY: prod
prod:
	npx gulp production
