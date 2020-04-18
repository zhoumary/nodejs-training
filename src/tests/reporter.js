const fetch = require('node-fetch');
const config = require('../../training.config.json');

class TrainingReporter {

    async onRunComplete(contexts, results) {
        const { numFailedTests, numPassedTests, numTotalTests } = results;
        if (config.callback) {
            await fetch(config.callback, {
                method: 'POST',
                body: JSON.stringify({
                    author: config.author,
                    specs: config.specs,
                    numFailedTests,
                    numPassedTests,
                    numTotalTests,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }

}


module.exports = TrainingReporter;