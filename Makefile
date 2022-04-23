.PHONY: up
.SILENT: help
.DEFAULT_GOAL: help

## Variables
dc_bin := $(shell command -v docker-compose 2> /dev/null)
CONFIG_ARGS=-f ./docker-environment/docker-compose.yml --env-file ./docker-environment/.env

## Commands
help: ## Show help
	@printf "\033[33m%s:\033[0m\n" 'Available commands'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[32m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Start containers
	$(dc_bin) ${CONFIG_ARGS} up -d mysql redis conversion-service client-gateway

down: ## Down containers
	docker stop $$(docker ps --filter "name=referral_net_*" -q)

migrate: ## Run migrate command
	cd ./database && yarn run migration:run
