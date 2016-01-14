
var clean = require('to-no-case');


/**
 * Expose `toSpaceCase`.
 */

module.exports = toSpaceCase;


/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */


function toSpaceCase (string) {
  return clean(string).replace(/(^|.)[\W_]+(.|$)/g, function (matches, left, right) {
    return left && right ? left + ' ' + right : left + right;
  });
}