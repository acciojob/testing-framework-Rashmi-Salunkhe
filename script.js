//your JS code here. If required.
function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`);
    try {
        func();
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch (error) {
        console.error(`failed running test suite ${testSuiteName} on test case ${error.testCaseName} with error message ${error.message}`);
    }
}

function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`);
    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch (error) {
        error.testCaseName = testCaseName;
        throw error;
    }
}

function expect(actual) {
    return {
        toExist: function() {
            if (actual === null || actual === undefined) {
                throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`);
            }
        },
        toBe: function(expected) {
            if (actual !== expected) {
                throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
            }
        },
        toBeType: function(type) {
            const actualType = typeof actual;
            if (actualType !== type) {
                throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${actualType}`);
            }
        }
    };
}
