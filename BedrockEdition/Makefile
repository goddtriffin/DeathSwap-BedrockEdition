$(VERBOSE).SILENT:
.DEFAULT_GOAL := help

.PHONY: help
help: # displays Makefile target info
	@IFS=$$'\n' ; \
	help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##/:/'`); \
	printf "%-30s %s\n" "target" "help" ; \
	printf "%-30s %s\n" "------" "----" ; \
	for help_line in $${help_lines[@]}; do \
			IFS=$$':' ; \
			help_split=($$help_line) ; \
			help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
			help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
			printf '\033[36m'; \
			printf "%-30s %s" $$help_command ; \
			printf '\033[0m'; \
			printf "%s\n" $$help_info; \
	done

.PHONY: install
install: ## installs dependencies
	npm install

.PHONY: checkupdates
checkupdates: ## checks if any dependencies have updates
	npx ncu

.PHONY: updates
update: ## update all dependencies to latest
	npx ncu -u

.PHONY: test
test: ## checks if codebase successfully lints and compiles
	npx gulp testLintAndCompilation

.PHONY: dev
dev: ## hot reloads packs on file save
	npx gulp development

.PHONY: buildlocal
buildlocal: ## refreshes the resource/behaviour packs in the Bedrock dev pack folders
	npx gulp buildlocal

.PHONY: prod
prod: ## generates production packs for release
	npx gulp production
