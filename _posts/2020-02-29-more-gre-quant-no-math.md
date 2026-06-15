---
layout: post
title:  "More GRE Quant using no math"
date:   2020-02-29 23:59
categories: grad-school gre
hasmath:   "true"
---

Sometimes the simplest answer isn't a trap answer at all and turns out to be the
right answer. Who knew Occam's Razor could apply to GRE problems, *especially*
quant problems.

### The example problem

> At a certain graduate program, students can major in business, law, or both.
> If 60% major in law; 50% in business; and 10% are currently undecided, what is
> maximum percentage of students who can major in only business?

> 10

> 20

> 30

> 40

> 60

Give yourself around 60 seconds to try and answer the question. Also, if someone
has a source for this question please let me know so I can credit accordingly.

Now, thanks to my introduction, some of you probably picked 40 without really
thinking about it much. 40 is indeed the correct answer. Let's solve this how
most people would go about it:

Since

$$ 0.6 + 0.5 + 0.1 > 1 $$

there must be some overlap, and since

$$ 0.6 + 0.5 + 0.1 = 1.2 $$

The overlap between people who majored in law and people who majored in business
must be 20%. That means that 30% are majoring in only business. If you stop here,
you're gonna end up choosing 30% as your answer, this is wrong. How do you
maximize the number of people who are majoring in only business (remember,
they're asking you what's the maximum number of people in only tha major? You
have to make it so every undecided person picks only business as their major.
This leaves you with 30% plus the now 10% of business majors. So you arrive to
40%.

I'm sure people have managed to make it even more complicated to solve a problem
like this somehow, but we're gonna be seeing an even simpler way of solving this
problem now:

1. 60% of people are majoring in law and thus can't be part of the percentage
of the final answer. 60% is out. You don't care about that 60% anymore.
1. 40% is what's left. That's it you're done. Every undecided student majors in
business and whatever quantity of students majoring solely in business is
redundant at this point. You just know both sets add up to 40%, there's no other
choice.

Answer is 40%.

You don't have to care about the overlap. You don't even really need to care
about the 10% of students who are undecided. You just know that 60% of students
are definitely out, they already gave you the answer.

This question can be answered in 10 seconds and you don't need to do (basically)
any math at all. This is all the math you need to know:

$$ 100 - 60 = 40 $$

When taking the real GRE you have to be on the lookout for this kinda way of
thinking. Some problems will demand a lot more time than the standard 1 min 45s
and so finding these shortcuts or efficient ways to go about solving problems
are extremely valuable.
