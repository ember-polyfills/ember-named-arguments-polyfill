'use strict';

const VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-named-arguments-polyfill',

  init() {
    this._super.init && this._super.init.apply(this, arguments);

    let checker = new VersionChecker(this.project);
    let emberVersion = checker.forEmber();

    this.shouldPolyfill = emberVersion.lt('3.1.0-alpha.1');
  },

  setupPreprocessorRegistry(type, registry) {
    if (this.shouldPolyfill) {
      registry.add('htmlbars-ast-plugin', {
        name: 'component-attributes',
        plugin: require('./lib/ast-transform'),
        baseDir() {
          return __dirname;
        },
      });
    }
  },
};
