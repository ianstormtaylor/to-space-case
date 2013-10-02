# to-space-case

  Convert a non-space-case string to a space-case string.

## Installation

    $ component install ianstormtaylor/to-space-case
    $ npm install to-space-case

## Example

```js
var space = require('to-space-case');

space('camelCase');  // "camel case"
space('snake_case'); // "snake case"
space('dot.case');   // "dot case"
```

## API

### toSpaceCase(string)
  
  Returns the space-case variant of a `string`.

## License

  MIT
