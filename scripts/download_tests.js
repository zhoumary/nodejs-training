const got = require('got');
const process = require('process');
const fs = require('fs');
const path = require('path');
const { tempLink } = require('../src/tests/utils');

/**
 * download test specs from remote (if user defined the URI)
 */
(async () => {
    if (require.main == module) {
        if (fs.existsSync(path.join(__dirname, '../training.config.json'))) {
            const config = require('../training.config.json');
            const client = got.extend({
                username: config.credential.username,
                password: config.credential.password,
            });
            try {
                if (config.role == 'trainee') {
                    const r = await client(`${config.specs}/specs.js`, { responseType: 'buffer' });
                    const testsSourceBytes = r.body;
                    const storagePath = tempLink(config.specs);
                    fs.writeFileSync(storagePath, testsSourceBytes);
                    console.log('training specs downloaded');
                } else {
                    console.log('training role is not "trainee", skipped');
                }
            } catch (error) {
                console.error('download remote tests case failed');
            }

            process.exit(0);
        } else {
            console.log('not found training config');
            process.exit(1);
        }
    }
})();


