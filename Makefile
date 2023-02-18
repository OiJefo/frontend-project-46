install: 
	npm ci
	npm link

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
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test