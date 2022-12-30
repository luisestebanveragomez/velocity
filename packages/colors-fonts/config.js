const StyleDictionaryPackage  = require("style-dictionary");
const tokens = require("./tokens");

function getStyleDictionaryConfig(file) {
  return {
    source: [`tokens/${file}/${file}.json`],
    platforms: {
      scss: {
        transformGroup: "scss",
        buildPath: `scss/`,
        "transform": function(obj) {
          // Aquí puedes hacer cualquier tipo de transformación o procesamiento de los valores del objeto
          // obj contiene el valor actual durante la iteración
          // Por ejemplo, para obtener el valor de la propiedad "color" del objeto:
          console.log(obj.color);
          // También puedes acceder a las propiedades del objeto utilizando notación de punto, como:
          console.log(obj.primary.value);
        },
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
