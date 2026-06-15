---
layout: post
title:  "Get KaTeX Working on Jekyll and GitHub Pages"
date:   2020-08-26 19:04
categories: jekyll katex blog
hasmath:   "true"
---

## Context

When I set up this blog to have support for $$\LaTeX$$ support, I was guilty of
not really understanding what was going on. I basically only knew that GitHub's
default math engine was `MathJax`, and that if I wanted to use $$\KaTeX$$ I was
gonna have to write a script that parsed the intermediate representation by
getting rid of the script tags of type `math/tex`.

Recently `kramdown` got updated and the output for `MathJax` changed and the
intermediate representation changed, the `math/tex` tags are no longer there.
Which for me, it means that $$\LaTeX$$ support was broken.

## How to Fix KaTeX After the Kramdown Update

I Google'd how to get around this new update and found this
[blog entry](https://gendignoux.com/blog/2020/05/23/katex.html). The idea of
rendering $$\TeX$$ code server side was exciting and felt more robust. However,
that did not end up working. I figured this time I would learn how exactly how
GitHub pages work when it comes to additional Gems needed. And turns out, I
learned quite a bit.

Basically, GitHub pages is limited when it comes to using additional Gems (which
are needed for sever-side rendering), and not only that, specifically, GitHub
pages limits its math engine to only `mathjax`, in fact, [they override whatever
setting you choose](https://github.com/github/pages-gem/blob/master/lib/github-pages/configuration.rb#L57). They force it to be `mathjax`. So server-side rendering is out.

## The Fix

The only option is going back to client-side rendering. Luckily, $$\KaTeX$$ has
our backs with the [autorender extension](https://katex.org/docs/autorender.html).

You basically just let `mathjax` process your markdown files with $$\TeX$$ code in
it. The intermediate representation rendered by `mathjax` is compatible with the
aforementioned extension. Javascript and $$\KaTeX$$ take care of the rest by
simply using the following:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous"
    onload="renderMathInElement(document.body);"></script>
```

You can obviously choose when `renderMathInElement` is run. You can even choose
not to add the code above whenever a post on your Jekyll blog doesn't have
math/formulas in it.

Additionally, you can write out the code yourself and not let `mathjax` process
it for you.

Remember, your `_config.yml` file should not change the `math_engine` field.
