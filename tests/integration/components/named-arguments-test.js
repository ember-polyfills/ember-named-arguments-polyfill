import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | named-arguments', function(hooks) {
  setupRenderingTest(hooks);

  test('allows named arguments to be used directly', async function(assert) {
    this.owner.register('template:components/foo-bar', hbs`<h2 data-test-name>hi {{@name}}!</h2>`);

    await render(hbs`{{foo-bar name="martin"}}`);

    assert.dom('[data-test-name]').hasText('hi martin!');
  });

  test('allows named argument paths to be used', async function(assert) {
    this.owner.register('template:components/foo-bar', hbs`<h2 data-test-name>hi {{@data.name}}!</h2>`);

    await render(hbs`{{foo-bar data=(hash name="martin")}}`);

    assert.dom('[data-test-name]').hasText('hi martin!');
  });
});