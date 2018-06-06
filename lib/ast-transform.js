'use strict';


/*
  Versions of Ember since 2.10 have asserted if named args were
  used (until the feature finally landed in Ember 3.1), however
  they _internally_ used for handling `attrs.foo` style references.

  This AST transform transitions all `@foo` PathExpressions into `attrs.foo`
  _before_ both the assertion for named arguments runs and the transform of
  `attrs.foo` into `@foo`.

  The final running code is _actually_ the original named args after all of
  this shenanigans...
*/
module.exports = class ArgsPolyfill {
  constructor() {
    this.syntax = null;
  }

  transform(ast) {
    let b = this.syntax.builders;

    let stack = [
      []
    ];

    let visitor = {
      Program: {
        enter(node) {
          let parent = stack[stack.length - 1];
          stack.push(parent.concat(node.blockParams));
        },
        exit() {
          stack.pop();
        },
      },

      PathExpression(node) {
        if (node.data === true) {
          return b.path(`attrs.${node.original.slice(1)}`);
        }
      },
    };

    this.syntax.traverse(ast, visitor);

    return ast;
  }
}