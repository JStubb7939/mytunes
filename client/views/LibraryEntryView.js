// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  //tagName: 'tr',

  template: _.template('<div class="row song"><div class="col-md-2 artist"><%= artist %></div><div class="col-md-5 title"><%= title %></div><div class="col-md-5 album"><%= album %><span class="glyphicon glyphicon-play"></span><span class="count"><%= count %></span></div></div>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      this.model.incrementCount();
    },

    'mouseover': 'glyphiconEvent',
    'mouseleave': 'antiGlyphiconEvent'

    // 'hover': function() {
    //   console.log('hover success!');
    // }
  },

  initialize: function() {
    this.model.on('change:count', function() {

      this.render();

    }, this);
  },

  glyphiconEvent: function() {
    this.$('.count').hide();
    this.$('.glyphicon').show();
  },

  antiGlyphiconEvent: function() {
    this.$('.glyphicon').hide();
    this.$('.count').show();
  },



  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});


