const process = require('process');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { tempLink } = require('../src/tests/utils');

(async () => {
    if (require.main == module) {
        if (fs.existsSync(path.join(__dirname, '../training.config.json'))) {
            const config = require('../training.config.json');
            try {
                if (config.specs) {
                    const r = await fetch(config.specs);
                    const testsSourceBytes = await r.buffer();
                    const storagePath = tempLink(config.specs);
                    fs.writeFileSync(storagePath, testsSourceBytes);
                    console.log('training specs download');
                } else {
                    console.log('training config not define the "specs link", skipped');
                }
            } catch (error) {
                console.error('download remote tests case failed');
            }

            process.exit(0);
        } else {
            console.log('not found training config');
        }
    }
})();


