const got = require('got');
const config = require('../../training.config.json');
const { md5 } = require('./utils');

class TrainingReporter {

    constructor() {
        this.client = got.extend({
            username: config.credential.username,
            password: config.credential.password,
        });
    }

    async onRunComplete(contexts, results) {
        const { numFailedTests, numPassedTests, numTotalTests } = results;
        if (config.role == 'trainee') { // only trainee report the test result
            const id = md5(`${config.specs}-${config.author}`);
            const updateOpt = {
                method: 'PUT',
                json: {
                    author: config.author,
                    specs: config.specs,
                    numFailedTests,
                    numPassedTests,
                    numTotalTests,
                }
            };
            try {
                const rev = await this.client(`${config.callback}/${id}`, { responseType: 'json' });
                updateOpt.json._rev = rev.body._rev;
            } catch (error) {
                // no error, not created before
            }
            await this.client(`${config.callback}/${id}`, updateOpt);

        }
    }

}


module.exports = TrainingReporter;