GitBook Blurbs plugin
===========

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
* `style` - `info`(default), `tip`, `danger` or `working`.
* `type` - `markdown`(default) or `asciidoc`.
* `title` - Title of the blurb.
