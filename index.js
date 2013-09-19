
var fromCamel = require('from-camel-case');


/**
 * Expose `fromCamelCase`.
 */

module.exports = toSpaceCase;


/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */


function toSpaceCase (string) {
  // replace non word characters with whitespace
  string = string.replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  });
  return fromCamel(string);
}