---
layout: post
title:  "GradCafe Data Analysis"
date:   2021-01-19
categories: grad-school gre gradcafe
hasmath:   "true"
---

GradCafe is a site that allows graduate school applicants to share their results and questions regarding their applications. The site acts like a forum for students to interact, but, perhaps more importantly, it also indirectly or directly gathers *a lot* of data.

Previous analysis have been done using GradCafe data. I am standing on the shoulders of these giants:

* [Debarghya Das's analysis](https://debarghyadas.com/writes/the-grad-school-statistics-we-never-had/)
* [Reddit post on timelines](https://www.reddit.com/r/gradadmissions/comments/7srxxy/decision_timelines_for_particular_universities/)

I will not be repeating those same analyses. However, some results might be confirmed by my own analysis. The main focus however of this post is to answer some commonly asked questions regarding graduate admissions, GRE scores, GPA, international vs national status, etc.

Plus, it's been 5 years since Debarghya's analysis, so this analysis is probably worth it if only just to double check if some conclusions still hold.

## Some Disclaimers

I wouldn't be able to sleep at night without adding some huge disclaimers to this post so here you go. The results and entries presented and analyzed here are probably the very definition of selection bias. Here are some possible issues with data:

* The overall population on the site is comprised of probably the more dedicated applicants
* Applicants are more likely to post their results if accepted
* Applicants with better stats are more likely to include them overall
* Applicants might feel pressured into padding their stats when reporting them
* Applicants with good stats but that got rejected are probably more likely to include their stats than rejects with not-so-great stats
* Applicants might take the GRE multiple times and include only their best score when submitting applications and reporting to GradCafe

## How I Obtained the Data

I scraped the data using code [available on GitHub](https://github.com/jjdelvalle/gradcafe_analysis) that's largely based on Debarghya Das's code. However, I adapted it for python 3 and added some usability extras so that anyone can download the data they feel they need and can stay up to date without relying on me or anyone to upload a new database of GradCafe entries. Additionally, I made it so the requests be made asynchronously and thus the scraping happens at a faster rate.

### Queries to use to gather as much data as possible

Deedy mentions in his article about using the following query to gather his data:

`u*`

This query yields around 500,000 results at the time of writing. I, however, found that the following query yields more results at the cost of being a lot slower to process by the site.

`(a*|e*|i*|o*|u*)`

This query yields 650,000+ results.

It was this query alone that made me implemente the async fetching and scraping of data. Sometimes GradCafe won't be able to handle all the requests and might just `504` on you. Retrying might solve the issue.

## Overall GradCafe Statistics

The basic stats:

<figure>
  <a href="{{site.url}}/assets/All_institutions_phd.png"><img src="{{site.url}}/assets/All_institutions_phd-small.webp" alt="All institution stats"/></a>
  <figcaption>Fig. 1: Stats generated using all submissions for all institutions</figcaption>
</figure>

## GRE Stats

ETS presents the following data for the GRE:

| Test | $$N$$ | $$\mu$$ | $$\sigma$$ |
|-------|--------|---------|------|
| Verbal reasoning | 1,640,350 | 150.37 | 8.49 |
| Quantitative reasoning | 1,643,587 | 153.39 | 9.35 |
| Analytical writing | 1,635,221 | 3.58 | 0.85 |

These numbers do not align with the GRE stats gathered from GradCafe. This suggegsts that the biases I pointed out earlier do apply. However, these are the people who you'll be competing with, if you're applying at top programs or applying for fellowships, or if you're applying for scholarships. These are the more relevant stats for the more serious applicants, i.e. you, you reading this post.

### GPA Stats

While we don't have good stats for GPA, a source like [USNews](https://www.usnews.com/education/best-colleges/articles/2019-01-28/what-a-good-college-gpa-is-and-why-it-matters) claims that 2.0 should be an absolute minimum GPA to maintain. It's quite staggering how the GPA distribution for GradCafe users is so top heavy, even though grade inflation has been a clear phenomenon in the US. Or is it?

## Questions to be Answered

### Do submissions on GradCafe reflect GPA inflation over the years?

I personally don't know much about this subject, but apparently some universities have been taking measures against the grade inflation problem. GradCafe data seems to go against the common assumption that grade inflation is still a problem. Fig 2 shows how the average GPA for applicants has remained stable for the past 10+ years.

<figure>
  <a href="{{site.url}}/assets/gpa_inflation.png"><img src="{{site.url}}/assets/gpa_inflation-small.webp" alt="GPA plotted across years"/></a>
  <figcaption>Fig. 2: GPA average across all fields over the years</figcaption>
</figure>

However, it may just be that top applicants, i.e. GradCafe users and maybe even you, reading this post, aren't too affected by the grade inflation problem as they may be perfectly capable of achieving top-notch grades without any extrinsical help.

### Do international students have significantly different stats?

There's always the question of whether international applicants are held to different standards. Deddy entertained this idea in his blog post and here I am just trying to replicate results.

<figure>
  <a href="{{site.url}}/assets/status_gre.png"><img src="{{site.url}}/assets/status_gre-small.webp" alt="GRE stats depending on status"/></a>
  <figcaption>Fig. 3: GRE distribution according to status</figcaption>
</figure>

When it comes to the GRE, Fig. 3 shows how international students, on average and across every field, seem to do slightly better than American students in the Quantitative section of the GRE. However, they do worse on the Verbal and Analytical Writing sections.

How each section is weighted probably heavily depends on the field of study and so it's hard to measure if GRE standards are actually different for international students. These stats suggest that such discrepancy is not the case.

<figure>
  <a href="{{site.url}}/assets/status_gpa.png"><img src="{{site.url}}/assets/status_gpa-small.webp" alt="GPA stats depending on status"/></a>
  <figcaption>Fig. 4: GPA distribution according to status</figcaption>
</figure>

When it comes to GPA, things are slightly fuzzier. Fig. 4 shows how American applicants are more top heavy when it comes to GPA. On the other hand, the distribution for international students seems more evened out. Different standards for GPA in different countries and different institutions probably explain this. It would not be out of the norm to have e.g. a 3.0 GPA in a particular school and still be a top 10% student.

### When should you expect a response? Are international applicants contacted later?

<figure>
  <a href="{{site.url}}/assets/status_timelines.png"><img src="{{site.url}}/assets/status_timelines-small.webp" alt="Results timeline according to status"/></a>
  <figcaption>Fig. 5: Timeline behavior according to status</figcaption>
</figure>

Fig. 5 suggests that both international and American students should be receiving news around roughly the same time. Does this vary by field though? I encourage people to explore this further, but as it stands, international applications being processed after national applications seems like a myth.

### How much does GPA matter?

<figure>
  <a href="{{site.url}}/assets/all_gpa.png"><img src="{{site.url}}/assets/all_gpa-small.webp" alt="GPA stats across all fields"/></a>
  <figcaption>Fig. 6: GPA stats generated using all submissions for all institutions</figcaption>
</figure>

Fig. 6 certainly makes me feel like it does. GPA might just be an indicator of how good the rest of the application package is. Anything under 4.0 seems to be completely split between getting accepted and rejected, so there must be more to applications than just GPA (or GRE for that matter).

### How much do the GREs matter?

<figure>
  <a href="{{site.url}}/assets/all_gre.png"><img src="{{site.url}}/assets/all_gre-small.webp" alt="GRE stats across all fields"/></a>
  <figcaption>Fig. 7: GRE stats generated using all submissions for all institutions</figcaption>
</figure>

The only section of the GRE that could possibly be a predictor according to this data might be the Analytical Writing section. While this section is the one I personally respect more out of the whole test, it's often the most ignored section in my experience.

The reason for that `0.5` difference being so significant, in my opinion, comes from the fact that percentiles for the two scores are vastly different, as opposed to e.g. a difference of one or two points in the Verbal or Quantitative sections.

## Final notes

This is by all imaginable metrics bad statistics. It's however more than we had before when it comes to actual graduate admissions data. Some of this analysis confirms what Deedy's analysis was over 5 years ago.

We analyzed over 600,000 entries to GradCafe and while this sample is probably biased incredibly and even might include some *troll* posts, it's probably reliable enough to arrive at some answers.

Distributions shown here probably vary *a lot* by field, and I can only encourage people to explore how their field behaves further.

Finally, several threads and comments by grad admissions committee members have come out pretty much outright stating that research experience and LORs are pretty much the most important aspects of your application once you're past the GPA and GRE filters. This analysis seems to agree with the notion that once you're past a certain threshold those non-measureable aspects come into play. Maybe in the future it'd be worth it to analyze the comment section of GradCafe where applicants usually include their research experience and LOR information.

I will be updating this post with stats and answers to those questions. I will also be adding most posts with more questions to be answered.

