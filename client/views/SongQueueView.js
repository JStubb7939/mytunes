// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', function() { this.render(); }, this);
    this.render();

  },

  render: function() {
    this.$el.children().detach();
    return this.$el.html('<div class="row"><div class="col-md-12 header">Song Queue</div></div>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
