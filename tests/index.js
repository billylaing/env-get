import test from 'tape';
import env from '../';

const VARIABLE_NAME = 'TEST_VARIABLE';
const VARIABLE_VALUE = 'variable';
const DEFAULT_VALUE = 'default';

test('no var and no default should throw an error', (assert) => {

    delete process.env[VARIABLE_NAME];

    assert.throws(
        () => env.get(VARIABLE_NAME),
        'If ENV variable is undefined and no default should throw an exception.'
    );

    assert.end();

});

test('no var and default should return the default', (assert) => {

    delete process.env[VARIABLE_NAME];

    const testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

    assert.end();

});

test('empty string and no default should throw an error', (assert) => {

    process.env[VARIABLE_NAME] = "";

    assert.throws(
        () => env.get(VARIABLE_NAME),
        'If ENV variable is undefined and no default should throw an error.'
    );

    assert.end();

});

test('empty string and default should return default', (assert) => {

    process.env[VARIABLE_NAME] = "";

    const testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

    assert.end();

});

test('var set and no default should return var', (assert) => {

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    const testVar = env.get(VARIABLE_NAME);

    assert.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    assert.end();

});

test('var set and default should return var', (assert) => {

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    const testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    assert.end();

});
