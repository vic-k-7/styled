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


function getStyleDictionaryConfig(platform) {
    return {
        "source": ["tokens/**/*.json"],
        "platforms": {
            "js": {
                "transformGroup": "js",
                "buildPath": "build/tokens/js/",
                "files": componentsFilesConfig
            },
            "scss": {
                "transformGroup": "scss",
                "buildPath": "build/tokens/scss/",
                "files": [{
                    "destination": "_variables.scss",
                    "format": "scss/variables"
                }]
            }
        }
    }
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

// ['brand-1', 'brand-2', 'brand-3'].map(function (brand) {
  ['js', 'scss'].map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
// })

console.log('\n==============================================');
console.log('\nBuild completed!');