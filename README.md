ember-named-arguments-polyfill
==============================================================================

Polyfills the [named arguments feature](https://github.com/emberjs/rfcs/blob/master/text/0276-named-args.md) to work for Ember 2.10+. This is convienient for addon authors to be able to start leveraging named arguments without requiring that all of its users are on Ember 3.1 or higher.

[![Build Status](https://travis-ci.org/rwjblue/ember-named-arguments-polyfill.svg?branch=master)](https://travis-ci.org/rwjblue/ember-named-arguments-polyfill)

Installation
------------------------------------------------------------------------------

```
ember install ember-named-arguments-polyfill
```


Usage
------------------------------------------------------------------------------

"Just use them!"


In a component's template that receives an argument named `foo` you can now do:

```hbs
{{@foo}}
```

🎉

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-named-arguments-polyfill`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
