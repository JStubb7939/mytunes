// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({



  initialize: function(message) {
    this.set('count', 0);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  },

  count: function() {
    return this.get('count');
  },

  incrementCount: function() {
    this.set('count', this.count() + 1);
  }



});
