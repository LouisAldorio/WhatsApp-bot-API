const wa = require('@open-wa/wa-automate');

const init = function() {
  return wa.create();
}

module.exports = init;