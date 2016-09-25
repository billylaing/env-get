import test from 'tape';
import env from '../';

const VARIABLE_NAME = 'TEST_VARIABLE';
const VARIABLE_VALUE = 'variable';
const DEFAULT_VALUE = 'default';

test('environment variable not set', (assert) => {

    delete process.env[VARIABLE_NAME];

    const withDefault = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        withDefault,
        DEFAULT_VALUE,
        'If ENV variable is undefined and default set should return default.'
    );

    const noDefault = () => env.get(VARIABLE_NAME);

    assert.throws(
        noDefault,
        'If ENV variable is undefined and no default should throw an exception.'
    );

    assert.end();

});

test('empty string environment variable', (assert) => {

    process.env[VARIABLE_NAME] = "";

    const withDefault = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        withDefault,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

    const noDefault = () => env.get(VARIABLE_NAME);

    assert.throws(
        noDefault,
        'If there is an empty string in ENV and no default should throw an error.'
    );

    assert.end();

});

test('environment variable set', (assert) => {

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    const withDefault = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        withDefault,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    const noDefault = env.get(VARIABLE_NAME);

    assert.equals(
        noDefault,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    assert.end();

});
