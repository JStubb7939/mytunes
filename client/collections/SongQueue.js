// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this),

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this),

    this.on('ended', function(song) {
      this.at(0).dequeue();
      if (this.length > 0) {
        this.playFirst();
      } else {
        return;
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }
});