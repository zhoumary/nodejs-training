const path = require('path');
const { Random } = require('mockjs');

module.exports = {
    title: path.basename(__filename, '.js'),
    description: 'input 2 number, return the sum of 2 variable',
    template: 'module.exports = (v1, v2) => {};',
    runner: async (f) => {
        for (let i = 0; i < 100; i++) {
            const v1 = Random.float(-1000, 1000);
            const v2 = Random.float(-1000, 1000);
            expect(f(v1, v2), `${v1} + ${v2} = ?`).toEqual(v1 + v2);
        }
    }
};