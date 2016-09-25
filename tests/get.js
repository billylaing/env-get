var test = require('tape');
var env = require('../');
var TEST_VARIABLE = 'TEST_VARIABLE';

test('no var and no default should throw an error', function(t) {
    t.plan(1);

    delete process.env[TEST_VARIABLE];

    t.throws(
        function() {
            env.get(TEST_VARIABLE);
        },
        'If ENV variable is undefined and no default should throw an exception.'
    );

});

test('no var and default should return the default', function(t) {
    t.plan(1);

    delete process.env[TEST_VARIABLE];
    var defaultValue = 'default';

    var testVar = env.get(TEST_VARIABLE, defaultValue);

    t.equals(
        testVar,
        defaultValue,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('empty string and no default should throw an error', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE] = "";

    t.throws(
        function() {
            env.get(TEST_VARIABLE);
        },
        'Env variable ' + TEST_VARIABLE + ' not found, and no default supplied!',
        'If ENV variable is undefined and no default should throw an error.'
    )

});

test('empty string and default should return default', function(t) {
    t.plan(1);

    process.env[TEST_VARIABLE] = "";
    var defaultValue = 'default';

    var testVar = env.get(TEST_VARIABLE, defaultValue);

    t.equals(
        testVar,
        defaultValue,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('var set and no default should return var', function(t) {
    t.plan(1);

    var variableValue = "variable";
    process.env[TEST_VARIABLE] = variableValue;

    var testVar = env.get(TEST_VARIABLE);

    t.equals(
        testVar,
        variableValue,
        'If there is an empty string in ENV it should use the default.'
    );

});

test('var set and default should return var', function(t) {
    t.plan(1);

    var variableValue = "variable";
    process.env[TEST_VARIABLE] = variableValue;
    var defaultValue = 'default';

    var testVar = env.get(TEST_VARIABLE, defaultValue);

    t.equals(
        testVar,
        variableValue,
        'If there is an empty string in ENV it should use the default.'
    );

});
