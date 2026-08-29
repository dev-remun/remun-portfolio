
NPM_CMD = npm run

VITE_PORT = 5173

.PHONY: dev run-tests setup build ci-setup

# ====================
# Development
# ====================

setup:
	npm install

ci-setup:
	npm ci

dev:
	$(NPM_CMD) dev -- --host

build:
	$(NPM_CMD) build

run-tests:
	$(NPM_CMD) test -- --run