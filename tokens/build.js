const StyleDictionaryPackage = require('style-dictionary');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

// Component setup

var globalCategories = ['font', 'color'];
var componentsFilesConfig = [ 
    {
    "format": "javascript/es6",
    "destination": "global.js",
    "filter": function(token) {
            if (globalCategories.indexOf(token.attributes.category) > -1) {
                return token;
            }
        }
    }
];

// Create one token file for each component
let components = glob.sync('tokens/components/*/*.json');
components.forEach(function(component){
    let componentName = path.basename(component, '.json');
    let componentConfig = {
        "format": "javascript/es6",
        "destination": `${componentName}.js`,
        "filter": function(token) {
            if (token.attributes.category == componentName) {
                return token;
            }
        }
    }
    componentsFilesConfig.push(componentConfig);
});


function getStyleDictionaryConfig(brand, platform) {
    let source = ['tokens/global/**/*.json', 'tokens/components/**/*.json'];
    let jsBuildPath = 'build/tokens/base/js/';
    let scssBuildPath = 'build/tokens/base/scss/';

    if (brand !== 'base') {
        source = [`tokens/brands/${brand}/**/*.json`, 'tokens/components/**/*.json']
        jsBuildPath = `build/tokens/brands/${brand}/js/`;
        scssBuildPath = `build/tokens/brands/${brand}/scss/`
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
                        "format": "javascript/object",
                        "destination": `${brand}.js`,
                    }
                ]
            },
            "scss": {
                "transformGroup": "scss",
                "buildPath": scssBuildPath,
                "files": [{
                    "destination": `_variables--${brand}.scss`,
                    "format": "scss/variables"
                }]
            }
        }
    }
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

let brands = ['base', 'coloronly'];

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