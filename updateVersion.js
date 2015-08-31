var fs = require('fs.extra');

//update bower.json
var data = fs.readJsonSync('./bower.json');
var version = data.dependencies['portal-core'];
data.dependencies['portal-core'] = version.replace(/#([^"]+)/, '#'+process.argv[2]);
var json = JSON.stringify(data, null, 2)
fs.writeFileSync('./bower.json', json)

//update package.json
var data = fs.readJsonSync('./package.json');
var version = data.dependencies['portal-core'];
data.dependencies['portal-core'] = version.replace(/#([^"]+)/, '#'+process.argv[2]);
var json = JSON.stringify(data, null, 2)
fs.writeFileSync('./package.json', json)

console.log('readFileSync complete');
