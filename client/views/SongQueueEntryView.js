// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagname: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    // 'add': function() {
    //  this.render();
    // },
    // 'remove': function() {
    //   this.render();
    //}
  },

  render: function() {
    console.log("Testing");
    return this.$el.html(this.template(this.model.attributes));
  }
});
