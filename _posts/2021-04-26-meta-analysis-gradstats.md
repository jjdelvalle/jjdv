---
layout: post
title:  "Meta Analysis on the GradStats App"
date:   2021-04-26
categories: grad-school gre gradcafe
---

A couple of months ago I realized [a web app](https://gradstats.jjdv.xyz) that lets people play around with historical graduate admissions data. Since then, thousands of people have used it and I took the liberty of tracking what people are searching for on the app.

*Note: I don't track your personal info, IP address, or anything. I only track what is being searched for and at what time.*

I wrote about the app [on this blog]({% post_url 2021-01-29-grad-stats-app %}) and [posted a link](https://www.reddit.com/r/gradadmissions/comments/ldcrev/update_gradcafe_analysis_i_created_an_app_that/) to it on reddit. And so, by now, I think enough people have used the app that some trends will be noticeable. As I am not logging anything related to the users, this analysis is gonna be pretty limited, but it should still be fun.

## What majors are more popular?

<figure>
  <a href="{{site.url}}/assets/majors.png"><img src="{{site.url}}/assets/majors-small.webp" alt="Major popularity distribution"/></a>
  <figcaption>Fig. 1: Major popularity distribution</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/majors2.png"><img src="{{site.url}}/assets/majors2-small.webp" alt="Major popularity distribution for more majors"/></a>
  <figcaption>Fig. 2: Major popularity distribution for more majors</figcaption>
</figure>

So, there's a clear trend regarding CS and ECE as majors. The majority of users came to the app from reddit. I do wonder if that population is extremely biased to those majors and/or STEM in general. I will be sharing the app on Twitter and other platforms in hopes of diversifying the audience.

## What degree are people shooting for?

<figure>
  <a href="{{site.url}}/assets/degrees.png"><img src="{{site.url}}/assets/degrees-small.webp" alt="Degree popularity distribution"/></a>
  <figcaption>Fig. 3: Degree popularity distribution</figcaption>
</figure>

It seems like people are both shooting for PhD and MS degrees. MBA people don't really seem to be too interested in finding out what the competition is doing. Then again, this could just be due to reddit's biased population. GradCafe itself doesn't have that many entries for MBA degrees, so it could just be that the sort of stats gathered on GradCafe aren't too relevant for MBA applicants.

## Where are people applying from?

As I mentioned in this post before, are I'm not tracking information on the users themselves. However, they are able to filter GradCafe entries by `status`, i.e. whether a student is American, International, etc.

<figure>
  <a href="{{site.url}}/assets/status.png"><img src="{{site.url}}/assets/status-small.webp" alt="Status frequency distribution"/></a>
  <figcaption>Fig. 4: Status frequency distribution</figcaption>
</figure>

It seems like the app is particularly popular for people outside the US, specifically international applicants with degrees from outside the US.

As my [initial analysis]({% post_url 2021-01-18-gradcafe-data %}) showed, this is probably not due to international applicants getting results later than American applicants. 

## What schools are more popular?

Making a plot for this would've probably been a lot tougher than for other aspects of the app. For this reason, I decided to simply create a word map that would representate how popular some schools are and what schools you guys are search for stats for.

<figure>
  <a href="{{site.url}}/assets/wordcloud.png"><img src="{{site.url}}/assets/wordcloud-small.webp" alt="Word cloud for school names"/></a>
  <figcaption>Fig. 5: Word cloud for school names</figcaption>
</figure>

This could be because these schools are the most competitive and thus most people will consider them, take a look at the stats, and then decided whether to apply or not. It could also just be people checking what top universitiy stats look like. And it, of course, could be a combination of both reasons. Either way, these top schools are probably, once again, influenced by the bias in the population for this app.

## A look into resources

<figure>
  <a href="{{site.url}}/assets/memory.png"><img src="{{site.url}}/assets/memory-small.webp" alt="Memory usage throughout time"/></a>
  <figcaption>Fig. 6: Memory usage throughout time</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/usage.png"><img src="{{site.url}}/assets/usage-small.webp" alt="Usage across time"/></a>
  <figcaption>Fig. 7: Usage across time</figcaption>
</figure>

Usage has gone down as acceptances and rejects have gone out. That, and the fact that the effects from hitting the top of the subreddit are fading, makes it so the traffic for this app will be cyclical throughout each year.

