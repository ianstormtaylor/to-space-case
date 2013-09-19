describe('to-space-case', function () {

var assert = require('assert');
var space = require('to-space-case');

it('shouldnt touch space case', function () {
  assert('a space case string' == space('a space case string'));
});

it('should convert camel case', function () {
  assert('a camel case string' == space('aCamelCaseString'));
});

it('should convert snake case', function () {
  assert('a snake case string' == space('a_snake_case_string'));
});

it('should convert dot case', function () {
  assert('a dot case string' == space('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('a title case of string' == space('A Title: Case of String'));
});

it('should convert constant case', function () {
  assert('a constant case string' == space('A_CONSTANT_CASE_STRING'));
});

});