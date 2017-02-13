import Ember from 'ember';
import tiny from 'tinycon';

export default Ember.Controller.extend({
  actions: {
    setFive() {
      tiny.setBubble(5);
    },

    setTen() {
      tiny.setBubble(10);
    }
  }
});
