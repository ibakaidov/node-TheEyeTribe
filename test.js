var tet = require('./')();
tet.on('data', console.log)
tet.on('error', console.log)
tet.on('close', console.log)