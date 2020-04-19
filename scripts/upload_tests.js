const got = require('got');
const process = require('process');
const fs = require('fs');
const path = require('path');

/**
 * upload test specs to remote
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
                if (config.role == 'trainer') {
                    const updateOpt = {
                        method: 'PUT',
                        body: fs.readFileSync(path.join(__dirname, '../dist/specs.bundle.js'))
                    };
                    try {
                        const rev = await client(`${config.specs}`, { method: 'GET', responseType: 'json' });
                        updateOpt.headers = { 'If-Match': rev.body._rev };
                    } catch (error) {
                        // no error, not created before
                    }
                    await client(`${config.specs}/specs.js`, updateOpt);
                    console.log('training specs uploaded');
                } else {
                    console.log('training role is not "trainer", skipped');
                }
            } catch (error) {
                console.error('upload tests case failed');
            }

            process.exit(0);
        } else {
            console.log('not found training config');
            process.exit(1);
        }
    }
})();


