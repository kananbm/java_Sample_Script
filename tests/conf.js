
var tsNode = require('ts-node');

tsNode.register({
    project: false,
    compiler: 'typescript',
    disableWarnings: true,
    fast: true
});

exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        name: 'Sample App Test'
    },
    specs: [ 'spec.ts' ],
    seleniumAddress: 'http://localhost:4444',

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    resultJsonOutputFile: './test.result.json'
};
