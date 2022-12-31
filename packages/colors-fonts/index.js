const { render } = require('node-sass')
const { mkdirSync, writeFileSync } = require('fs');
const renderSass = () => {
  return render({
      file: './_core.scss',
      outFile: './resources/velocity-core.css'
    },
    function(errSass, result) {
      if (errSass) {
        console.error("ERROR SASS:", errSass);
        return false;
      } else {
        writeFileSync('./resources/velocity-core.css', result.css, function(
          errorWrite
        ) {
          if (!errorWrite) {
            console.error(errorWrite);
          }
        });
        return true;
      }
    })
}


renderSass()