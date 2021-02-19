---
layout: page
title: GradStats
description: Exploratory Data web app built with streamlit that allows people to check historical grad admissions data
date: 2021-02-03
img: /assets/img/gradstats.webp
importance: 1
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/gradstats.webp' | relative_url }}" alt="GradStats preview" title="GradStats preview"/>
    </div>
</div>
<div class="caption">
    What GradStats looks like at the time of writing
</div>

Recently I wrote about GradCafe stats and understandably, people wanna know about stats for specific schools, programs, cycles, etc.

So I built an app that lets you query the scraped data directly. You can basically query for the following fields:

* Institution
* Major
* Type of degree
* Season/cycle
* Status
* and any combination of the above

You can also personalize somewhat the look of the graphs, but really the meat of the data is what’s interesting here.


## Motivation behind the project

The motivation behind this project was just to democratize GradCafe data in a way that’s easily accessible to people regardless of their background and especially regardless of their coding skills. My previous attempt at doing this simply involved democratizing the way you scraped data; hopefully this attempt will be a lot more suitable in considering the diversity in graduate school applicants.

In line with my objective, the app was built using `streamlit` which made things really easy. The code is [available on Github](https://github.com/jjdelvalle/grad_stats) for anyone to check out but it’s definitely nothing impressive.


**Anyway, here’s the link: [Grad Stats](https://gradstats.jjdv.xyz).**

The app is hosted on my personal site and I hope it proves useful to everyone curious about the graduate admissions process.

I used `streamlit`, `pandas`, `matplotlib`, and `seaborn` for this project.