GitBook Blurbs plugin
===========

[![NPM](https://nodei.co/npm/gitbook-plugin-blurbs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gitbook-plugin-blurbs/)

This Gitbook plugin improves the [hints](https://github.com/GitbookIO/plugin-hints) plugin, which seems inactive. This plugin supports parsing enclosed markdown text in the blurb.

### Install

Add following to `book.json`.

```
{
    "plugins": ["blurbs"]
}

```

### Usage

Markdown/Asciidoc content is parsed.

```
{% blurb style='tip', title='Important notice' %}
Render this link: [Google](https://google.com)
{% endblurb %}
```

Support arguments:
* `style` - `info`(default), `tip`, `warning`, `error`, `help`, `build`.
* `type` - `markdown`(default) or `asciidoc`.
* `title` - Title of the blurb.

### Icons

Icons used in this plugin are taken from [Material icons](https://design.google.com/icons/). These icons are licensed under Apache v2, see [git repo](https://github.com/google/material-design-icons/).
