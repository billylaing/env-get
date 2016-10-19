module.exports = {
    get: function get(variableName, optionalDefault) {
        var value = process.env[variableName] || optionalDefault;
        if (typeof value !== 'undefined') return value;
        throw new Error('Env variable ' + variableName + ' not found, and no default supplied!');
    }
};
