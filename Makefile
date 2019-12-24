install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run
	
link:
	sudo npm link

lint:
	npx eslint .
asc:
	asciinema rec