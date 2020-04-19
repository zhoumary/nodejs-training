const fs = require('fs');
const path = require('path');
const process = require('process');

const { createEmptyTestCase, tempLink } = require('./utils');

describe('mandatory check', () => {

    it('should have the training config file', () => {
        expect(fs.existsSync(path.join(__dirname, '../../training.config.json')));
    });

    if (!process.env.NO_AUTHOR_CHECK) { // not check author

        it('should have be a valid config', () => {
            const config = require('../../training.config.json');
            expect(config.author, 'training config must have an author').not.toBeFalsy();
        });

    }


});

const executeSpecs = specsSource => {

    const specs = eval(specsSource); // dynamic generate test cases

    specs.forEach(group => {
        describe(group.title, () => {
            group.specs.forEach(spec => {
                it(`spec: ${spec.title}`, async () => {
                    const p = path.join(__dirname, '../cases', group.title, spec.title, 'index.js');
                    if (!fs.existsSync(p)) {
                        console.info(`not found test case for ${spec.title}, create it`);
                        createEmptyTestCase(group.title, spec.title, spec.description, spec.template);
                    }
                    await spec.runner(require(p));
                });
            });
        });
    });

};

if (fs.existsSync(path.join(__dirname, '../../training.config.json'))) {

    const c = require('../../training.config.json');

    const remoteTestsTempPath = tempLink(c.specs);
    const localBundleTestsPath = path.join(__dirname, '../../dist/specs.bundle.js');

    if (c.role == 'trainee') { // if remote specs setup
        try {
            executeSpecs(require(remoteTestsTempPath));
        } catch (err) {
            console.error(err.message);
            console.error('please check your config.specs & credential');
        }
    } else { // trainer
        if (fs.existsSync(localBundleTestsPath)) { // if local bundle file generated
            executeSpecs(require(localBundleTestsPath));
        } else { // fallback
            executeSpecs(require('./specs'));
        }
    }


} 