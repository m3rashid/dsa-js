// import fs from 'fs';
const fs = require('fs');
const path = require('path');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

// eslint-disable-next-line space-before-function-paren
function main() {
	const source = fs.readFileSync(path.join(__dirname, '../package.json')).toString('utf-8');
	const sourceObj = JSON.parse(source);
	sourceObj.scripts = {};
	sourceObj.devDependencies = {};
	sourceObj['lint-staged'] = {};
	sourceObj.main = 'index.js';
	fs.writeFileSync(
		path.join(__dirname, '../dist/package.json'),
		// eslint-disable-next-line comma-dangle
		Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'),
	);
	fs.writeFileSync(path.join(__dirname, '../dist/version.txt'), Buffer.from(sourceObj.version, 'utf-8'));

	// fs.copyFileSync(__dirname + '/../.npmignore', __dirname + '/.npmignore');
}

main();
