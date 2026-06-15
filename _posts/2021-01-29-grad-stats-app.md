---
layout: post
title:  "Grad Stats App -- Grad Admissions Data Made Easy"
date:   2021-01-29
categories: grad-school gre gradcafe
---

Continuation of [this post]({% post_url 2021-01-18-gradcafe-data %})

**TL;DR Here's the link to the app: [https://gradstats.jjdv.xyz](https://gradstats.jjdv.xyz)**

Recently I wrote about GradCafe stats and understandbly, people wanna know about stats for specific schools, programs, cycles, etc.

So I built an app that lets you query the scraped data directly: [Here's a quick overview of the app in the form of a video.](https://youtu.be/5puIG1nuOxg)

You can basically query for the following fields:

* Institution
* Major
* Type of degree
* Season/Cycle
* Status
* and any combination of the above

You can also personalize somewhat the look of the graphs, but really the meat of the data is what's interesting here.

## Motivation behind the project

The motivation behind this project was just to democratize GradCafe data in a way that's easily accessible to people regardless of their background and especially regardless of their coding skills. My previous attempt at doing this simply involved democratizing the way you scraped data; hopefully this attempt will be a lot more suitable in considering the diversity in graduate school applicants.

In line with my objective, the app was built using `streamlit` which made things really easy. The code is [available on Github](https://github.com/jjdelvalle/grad_stats) for anyone to check out but it's definitely nothing impressive.

### Known issues

Server running the app is pretty weak so it probably can't tolerate a Reddit Hug of Death yet, but I'm trying to optimize it further and then I'll try to make it so a not-too-expensive server can handle the app just fine.

Anyway, here's the link: **[Grad Stats](https://gradstats.jjdv.xyz)**

