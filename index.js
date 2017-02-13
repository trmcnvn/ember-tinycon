/* eslint-env node */
module.exports = {
  name: 'ember-tinycon',
  options: {
    nodeAssets: {
      tinycon: {
        import: ['tinycon.min.js'],
      }
    }
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-tinycon/shim.js', {
      exports: { 'tinycon': ['default'] }
    });
  }
};
