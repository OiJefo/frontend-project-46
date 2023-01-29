install: 
	npm ci

gendiff:
	node index.js

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .

fix:
	npx eslint . --fix

test:
	npm test -- --coverage --coverageProvider=v8

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test