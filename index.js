var CLASSES = {
  info:'info',
  tip:'success',
  danger:'danger',
  working:'warning'
};

function makeIcon(name) {
  return '<i class="fa fa-'+name+'" style=""></i>';
}
var ICONS = {
  info: makeIcon('info-circle'),
  tip: makeIcon('mortar-board'),
  danger: makeIcon('exclamation'),
  working: makeIcon('wrench')
};

module.exports = {
  blocks: {
    blurb: {
      process: function (block) {
        var type = block.kwargs.type || 'markdown';
        var style = block.kwargs.style || 'info';
        var title = block.kwargs.title || '';
        var textBlockStyle = !title ? 'style="margin-left:30px;"' : '';
        return this.book.renderBlock(type, block.body)
          .then(function(text) {
            return '<div class="alert alert-'+CLASSES[style]+'">'
              + (title
                ? ('<h6>'
                    + ICONS[style]
                    + title
                    + '</h6>'
                  )
                : ('<div class="pull-left">'
                    + ICONS[style]
                    + '</div>'
                  )
                )
              + '<div ' + textBlockStyle  + '>'
              + text
              + '</div>'
              + '</div>';
          });
      }
    }
  }
};
