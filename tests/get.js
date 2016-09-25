var test = require('tape');
var env = require('../');

var TEST_VARIABLE_NAME = 'TEST_VARIABLE';
var TEST_VARIABLE_VALUE = 'variable';
var TEST_DEFAULT_VALUE = 'default';

test('no var and no default should throw an error', function(t) {
    t.plan(1);

    delete process.env[TEST_VARIABLE_NAME];

    t.throws(
        function() {
            env.get(TEST_VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an exception.'
    );

});

test('no var and default should return the default', function(t) {
    t.plan(1);

    delete process.env[TEST_VARIABLE_NAME];

    var testVar = env.get(TEST_VARIABLE_NAME, TEST_DEFAULT_VALUE);

    t.equals(
        testVar,
        TEST_DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('empty string and no default should throw an error', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE_NAME] = "";

    t.throws(
        function() {
            env.get(TEST_VARIABLE_NAME);
        },
        'If ENV variable is undefined and no default should throw an error.'
    )

});

test('empty string and default should return default', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE_NAME] = "";

    var testVar = env.get(TEST_VARIABLE_NAME, TEST_DEFAULT_VALUE);

    t.equals(
        testVar,
        TEST_DEFAULT_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('var set and no default should return var', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE_NAME] = TEST_VARIABLE_VALUE;

    var testVar = env.get(TEST_VARIABLE_NAME);

    t.equals(
        testVar,
        TEST_VARIABLE_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('var set and default should return var', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE_NAME] = TEST_VARIABLE_VALUE;

    var testVar = env.get(TEST_VARIABLE_NAME, TEST_DEFAULT_VALUE);

    t.equals(
        testVar,
        TEST_VARIABLE_VALUE,
        'If there is an empty string in ENV it should use the default.'
    );

});
