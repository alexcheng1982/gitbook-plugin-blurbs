const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

var COLORS = {
  info:    '#31708f',
  tip:     '#3c763d',
  error:   '#a94442',
  warning: '#8a6d3b',
  help:    '#337ab7',
  build:   '#337ab7'
};

module.exports = {
  blocks: {
    blurb: {
      process: function (block) {
        var type = block.kwargs.type || 'markdown';
        var style = block.kwargs.style || 'info';
        var title = block.kwargs.title || '';
        var svg = fs.readFileSync(path.join(__dirname, 'svg', style + '.svg'), 'utf8');
        var template = fs.readFileSync(path.join(__dirname, 'template.mustache'), 'utf8');
        return this.book.renderBlock(type, block.body)
          .then(function(text) {
            return Mustache.render(template, {
              color: COLORS[style],
              title: title,
              svg: svg,
              text: text
            });
          });
      }
    }
  }
};
