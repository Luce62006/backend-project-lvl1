install: install-deps
start:
	npx babel-node -- 'src/bin/brain-games.js' 

start1:
	npx babel-node -- 'src/bin/brain-even.js' 

start2:
	npx babel-node -- 'src/bin/brain-calc.js'

start3:
	npx babel-node -- 'src/bin/brain-gcd.js'


run:
	# npx babel-node --'src/bin/brain-even.js'
    # npx babel-node --'src/bin/brain-calc.js'
	# npx babel-node --'src/bin/brain-gcd.js'	
install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test
