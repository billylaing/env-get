var test = require('tape');
var env = require('../');

var VARIABLE_NAME = 'TEST_VARIABLE';
var VARIABLE_VALUE = 'variable';
var DEFAULT_VALUE = 'default';

test('no var and no default should throw an error', function(t) {
    t.plan(1);

    delete process.env[VARIABLE_NAME];

    t.throws(
        function() {
            env.get(VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an exception.'
    );

});

test('no var and default should return the default', function(t) {
    t.plan(1);

    delete process.env[VARIABLE_NAME];

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    t.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('empty string and no default should throw an error', function(t) {
    t.plan(1);

    process.env[VARIABLE_NAME] = "";

    t.throws(
        function() {
            env.get(VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an error.'
    )

});

test('empty string and default should return default', function(t) {
    t.plan(1);

    process.env[VARIABLE_NAME] = "";

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    t.equals(
        testVar,
        DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('var set and no default should return var', function(t) {
    t.plan(1);

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    var testVar = env.get(VARIABLE_NAME);

    t.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

});

test('var set and default should return var', function(t) {
    t.plan(1);

    process.env[VARIABLE_NAME] = VARIABLE_VALUE;

    var testVar = env.get(VARIABLE_NAME, DEFAULT_VALUE);

    t.equals(
        testVar,
        VARIABLE_VALUE,
        'If the variable is set it should use the that value.'
    );

});
