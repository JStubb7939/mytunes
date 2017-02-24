// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
    this.collection.on('sync', function() {
      this.render();
    }, this);

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="row header"><div class="col-md-2">Artist</div><div class="col-md-5">Title</div><div class="col-md-4">Album</div><div class="col-md-1">Count</div></div>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
