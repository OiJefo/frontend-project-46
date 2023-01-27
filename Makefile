setup: install link publish

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