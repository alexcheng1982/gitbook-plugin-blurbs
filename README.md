GitBook Blurbs plugin
===========

Add to GitBook

```
{
    "plugins": ["blurbs"]
}

```

Use it in the book.

```
{% blurb style='tip' %}
Render this link: [Google](https://google.com)
{% endblurb %}
```

Support arguments:
* `style` - `info`(default), `tip`, `danger` or `working`.
* `type` - `markdown`(default) or `asciidoc`.
* `title` - Title
