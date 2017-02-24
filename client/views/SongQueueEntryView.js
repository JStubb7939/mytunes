// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  //tagname: 'tr',

  template: _.template('<div class="row song"><div class="col-md-2 artist"><%= artist %></div><div class="col-md-5 title"><%= title %></div><div class="col-md-5 album"><%= album %><span class="glyphicon glyphicon-remove"></span></div></div>'),

  events: {
    'click': function() {
      this.model.dequeue();

    },

    'mouseover': 'glyphiconEvent',
    'mouseleave': 'antiGlyphiconEvent'

  },

  glyphiconEvent: function() {
    this.$('.glyphicon').show();
  },
  antiGlyphiconEvent: function() {
    this.$('.glyphicon').hide();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
