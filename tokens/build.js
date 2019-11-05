const StyleDictionaryPackage = require('style-dictionary');

function getStyleDictionaryConfig(brand, platform) {
    let source = ['tokens/global/global.json', 'tokens/components/**/*.json'];
    let jsBuildPath = 'src/tokens/base/js/';
    let scssBuildPath = 'src/tokens/base/scss/';

    // TODO: Avoid hardcoded conditional
    if (brand !== 'base') {
        source = [
            `tokens/brands/${brand}/global.json`, // Brand global
            'tokens/components/**/*.json', // Base components
            `tokens/brands/${brand}/components/**/*.json` // Brand specific overrides
        ]
        jsBuildPath = `src/tokens/brands/${brand}/js/`;
        scssBuildPath = `src/tokens/brands/${brand}/scss/`
    }

    return {
        "source": source,
        "platforms": {
            "js": {
                "transformGroup": "js",
                "buildPath": jsBuildPath,
                "files": [
                    {
                        "format": "javascript/es6",
                        "destination": `${brand}.es6.js`,
                    },
                    {
                        "format": "javascript/module",
                        "destination": `${brand}.js`,
                    }
                ]
            },
            "scss": {
                "transformGroup": "scss",
                "buildPath": scssBuildPath,
                "files": [{
                    "destination": `${brand}.scss`,
                    "format": "scss/variables"
                }]
            }
        }
    }
}

console.log('Build started...');

// TODO: Generate dynamically
let brands = ['base', 'vibrant'];

brands.map(function (brand) {
  ['js', 'scss'].map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');