var test = require('tape');
var env = require('../');

var VARIABLE_NAME = 'TEST_VARIABLE';
var VARIABLE_VALUE = 'variable';
var DEFAULT_VALUE = 'default';

test('no var and no default should throw an error', function(assert) {

    delete process.env[VARIABLE_NAME];

    assert.throws(
        function() {
            env.get(VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an exception.'
    );

    assert.end();

});

test('no var and default should return the default', function(assert) {

    delete process.env[VARIABLE_NAME];

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

    assert.end();

});

test('empty string and no default should throw an error', function(assert) {

    process.env[VARIABLE_NAME] = "";

    assert.throws(
        function() {
            env.get(VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an error.'
    );

    assert.end();

});

test('empty string and default should return default', function(assert) {

    process.env[VARIABLE_NAME] = "";

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

    assert.end();

});

test('var set and no default should return var', function(assert) {

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    var testVar = env.get(VARIABLE_NAME);

    assert.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    assert.end();

});

test('var set and default should return var', function(assert) {

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    assert.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

    assert.end();

});
