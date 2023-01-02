const StyleDictionaryPackage  = require("style-dictionary");
const tokens = require("./tokens");

function getStyleDictionaryConfig(file) {
  return {
    source: [`tokens/${file}/${file}.json`],
    platforms: {
      scss: {
        transformGroup: "scss",
        buildPath: `scss/`,
        files: [{
          destination: `_${file}.scss`,
          mapName: `${file}`,
          format: "scss/map-flat",
        }],
      },
    },
  };
}

tokens.map((file) => {
  ['scss'].map( (platform) => {
    const StyleDictionary = StyleDictionaryPackage .extend(getStyleDictionaryConfig(file));
    StyleDictionary.buildPlatform(platform)
  })
})
