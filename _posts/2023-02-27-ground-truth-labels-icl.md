---
layout: post
title:  "Ground Truth Labels and In-context Learning"
date:   2023-02-27 14:03
categories: nlp icl few-shot
hasmath:   "true"
toc: true
---

With the introduction of pre-trained models and their adaption to downstream tasks {% cite howard2018universal devlin-etal-2019-bert %}, the natural language processing (NLP) field has had its imagenet-moment. Moreover, in-context learning (ICL) {% cite NEURIPS2020_1457c0d6 %} has proven to be another great game-changer on top of pre-trained languages. However, not a lot of work has gone into exploring why ICL works and what elements are crucial to its performance. In this blog post, I go over some literature exploring why, how and when ICL works {% cite min-etal-2022-rethinking yoo-etal-2022-ground wei2023larger %}.

## Background

A few years ago, taking advantage of pre-trained languages became the way to approach a new task; by either adapting knowledge or fine-tuning the pre-trained model {% cite howard2018universal peters-etal-2018-deep %} you could achieve state of the art performance. The battles of pre-trained languages, with their growing sizes began.

In 2020, {% cite NEURIPS2020_1457c0d6 %} introduced what they call in-context learning (ICL) as a concept for sufficiently large models. The authors propose GPT-3, a model trained on a causal language modeling task on massive amounts of data. The resulting model shows the ability of ICL. ICL consists on models getting a prompt with instructions for the task to be carried out. Additionally, examples of the task done successfully can also included. The performance of ICL is suprisingly good and best of all: no parameter updating happens.

## The Premise

We will first look at in-context learning as presented originally {% cite NEURIPS2020_1457c0d6 %}. Figure 1 shows a sample input illustrating how in-context learning is usually done. Generally a task description is included, examples can be included, and finally a prompt with the input for which a prediction is desired.

<figure>
  <a href="{{site.url}}/assets/icl_gpt3paper.png"><img src="{{site.url}}/assets/icl_gpt3paper.webp" alt="ICL input example"/></a>
  <figcaption>Fig. 1: In-context learning as presented originally {% cite NEURIPS2020_1457c0d6 %}.</figcaption>
</figure>

The original paper calls this specific input an example of few-shot in-context learning. From this example we can infer that we can study at least the following aspects of ICL:

1. Input-label mapping
1. Distribution of inputs
1. Label space
1. Format of input

This blog post will discuss all of them, but will focus on the first one the most.

### How does it work?

The overall mechanism of ICL is not well understood and many questions regarding why and how it works remain to be answered.

That said, recent studies {% cite von2022transformers dai2022can %} have shown that internally, the model mimics a gradient descent approach via its attention mechanism to learn from the input prompt. This conditions the model to "learn" from the input and thus generate the right output.

However, understanding how exactly the input influences the ICL mechanism and what truly matters is something that will be explored further in this blogpost.

## What Matters: The Claim and the Semi-Refutal

It has been historically assumed that a good set of examples is important for good ICL performance {% cite liu-etal-2022-makes lester-etal-2021-power %}. However, what makes a good example remained to be explored. A recent study {% cite min-etal-2022-rethinking %} proposed what is important in a prompt.

### The Claim

In their paper {% cite min-etal-2022-rethinking %} the authors explored 6 large language models (LLMs), ranging from 774 million parameters (GPT-2) to 175 billion parameters (GPT-3, see Table 1 for a full list of models evaluated). Two inference methods were tried: direct and channel. 6 different tasks were evaluated: sentiment analysis, paraphrase detection, sentence completion, NLI, hate speech detection, question answering. These tasks were evaluated on 26 datasets total.

|Model|# Params|Public|Meta-trained|
|-----|--------|------|------------|
|GPT-2 Large|774M|✔️|✘|
|MetaICL|774M|✔️|✔️|
|GPT-J|6B|✔️|✘|
|fairseq 6.7B|6.7B|✔️|✘|
|fairseq 13B|13B|✔️|✘|
|GPT-3|175B|✘|✘|

_Table 1: Models analyzed {% cite min-etal-2022-rethinking %}_

The authors ran experiments in a $$k$$-shot setting, where they set $$k=16$$ and ran each experiment on five different seeds. They used $$F_1$$ and accuracy as their reported metrics. Their finding were as follows:

**Input-label Mapping**: the main result of the paper shows that assigning random labels (as opposed to the ground-truth labels) in the examples of the input has no significant impact to the ICL performance.


<figure>
  <a href="{{site.url}}/assets/icl_inputlabel.png"><img src="{{site.url}}/assets/icl_inputlabel.webp" alt="ICL input-label mapping experiment results."/></a>
  <figcaption>Fig. 2: ICL performance not overly hurt when random labels are used {% cite min-etal-2022-rethinking %}.</figcaption>
</figure>

**Number of [correct] labels**: The effect described above seems to be consistent, regardless of what $$k$$ is picked. See Figure 3. Experiments also show that after a certain $$k$$ performance does not improve greatly.

<figure>
  <a href="{{site.url}}/assets/icl_knumber.png"><img src="{{site.url}}/assets/icl_knumber.webp" alt="Experiment results on varying k."/></a>
  <figcaption>Fig. 3: Ablations on varying numbers of examples in the demonstrations {% cite min-etal-2022-rethinking %}.</figcaption>
</figure>

**Why it works (other factors)**:

As previously mentioned, the authors explore other factors such as: label space, format and distribution of inputs.

Figures 4, 5 and 6 show their findings with respect to distribution of inputs, format, and label space respectively.

<figure>
  <a href="{{site.url}}/assets/icl_inputdist.png"><img src="{{site.url}}/assets/icl_inputdist.webp" alt="Experiment results on input distribution."/></a>
  <figcaption>Fig. 4: Input distribution results. Distribution of input can be directly seen by comparing the middle bars {% cite min-etal-2022-rethinking %}.</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/icl_format.png"><img src="{{site.url}}/assets/icl_format.webp" alt="Experiments results for format factor."/></a>
  <figcaption>Fig. 5: Format results {% cite min-etal-2022-rethinking %}.</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/icl_labelspace.png"><img src="{{site.url}}/assets/icl_labelspace.webp" alt="Experiments on other factors."/></a>
  <figcaption>Fig. 6: Label space can be evaluated by looking at the middle bars {% cite min-etal-2022-rethinking %}.</figcaption>
</figure>

Briefly, **they find that showing the label and input distribution, even if it is just independently**, i.e. now showing a direct mapping, is crucial for ICL. If one of these aspects if missing but the right format is used, performance can still remain high.

### The Semi-Refutal

With NLP moving so fast, such bold claims would not go unchallenged. In the same conference where the above paper was presented, a response paper {% cite yoo-etal-2022-ground %} already showed up challenging and refining the experiments presented to show that ground-truth labels do [sometimes] indeed matter. Figure 7 shows a case where ground-truth labels in the input clearly matter.

<figure>
  <a href="{{site.url}}/assets/icl_rebuttal.png"><img src="{{site.url}}/assets/icl_rebuttal.webp" alt="Experiment showing that ground-truth labels sometimes matter."/></a>
  <figcaption>Fig. 7: Experiment showing that ground-truth labels sometimes matter {% cite yoo-etal-2022-ground %}.</figcaption>
</figure>

The authors of this work aim to propose more systematic metrics and experiments to analyzing this phenomenon. The authors use mostly the same tasks and datasets. Additionally, however, they propose the following.

**Label-correctness Sensitivity**: We're not just interested in whether models are sensitive but how sensitive they are to label corruption. Thus, the authors define sensitivity as the slope to the modelling of the decaying performance as labels get corrupted:

$$y = \beta_0 + \beta_1 s$$

Where $$y$$ is the obtained performance as measured by e.g. accuracy. $$s$$ is the percentage of correctly labeled examples in the input. This would thus make $$\beta_1$$ our sensitivity measure.

**Ground-truth Label Effect Ratio**: Not all tasks are made the same. Some are easier than others for ICL. Thus, the authors define a way to measure the impact of label corruption, or rather how much ground-truth labels improve performance over random labels.

$$GLER = \frac{y_{GT} - y_{RL}}{y_{GT} - y_{\emptyset}}$$

Where $$y_{GT}$$ is the performance using ground-truth labels, $$y_{RL}$$ is the performance of the model using random labels and $$y_{\emptyset}$$ is the performance of the model in a zero-shot setting, i.e. no examples provided in the input.

This basically tells us how much ground-truth labels improve performance over random labels.

### Main Results

**Initial results**

Table 2 shows how there is a clear positive correlation, i.e. there is sensitivity towards label corruption.

|Method|Coefficient|Intercept|$$R^2$$|
|------|-----------|---------|-------|
|GPT-NeoX Direct|0.300|0.327|0.810|
|GPT-J Direct|0.309|0.291|0.861|

_Table 2: Main results for regression fitted as per the sensitivity equation provided._

Additionally, figure 8 shows sensitivity and GLER results for the different datasets and tasks.

<figure>
  <a href="{{site.url}}/assets/icl_firstscatter.png"><img src="{{site.url}}/assets/icl_firstscatter.webp" alt="Initial results from Yoo et al."/></a>
  <figcaption>Fig. 8: Initial results from the response paper {% cite yoo-etal-2022-ground %}.</figcaption>
</figure>

**Task difficulty**: the authors hypothesize that sensitivity is related to task difficulty. They propose the following metric and present the results in figure 9.

$$ y_{rel} = y_{GT} - y_{baseline} $$

<figure>
  <a href="{{site.url}}/assets/icl_relative.png"><img src="{{site.url}}/assets/icl_relative.webp" alt="Relative difficulty vs sensitivity"/></a>
  <figcaption>Fig. 9: Relative difficulty against sensitivity {% cite yoo-etal-2022-ground %}.</figcaption>
</figure>

The authors conclude that sensitivity alone is not a powerful enough metric on its own. Something like task difficulty must also be taken into account.

**When do ground-truth labels [not] matter?**

The authors also suggets scenarios and factors where sensitivity may be reduced:

* Using the channel method of inference as opposed to direct
* Calibrating before using {% cite zhao2021calibrate %} might also reduce sensitivity
* The higher your $$k$$ the more sensitive your model will be to some degree
* They also show how the model size be positively correlated with sensitivity

## Recent Discoveries

Aligned with the results regarding size of model discussed {% cite yoo-etal-2022-ground %}, more recent work {% cite wei2023larger %} has shown that not only are larger models more sensitive to label corruption, but also that they process ICL differently as they scale up. Emergent abilities are once again relevant here.

The main findings are as follows:

1. Models get better at overriding semantic priors as they get larger, i.e. they're better at "following" the input-label mapping in the input.
1. Being able to use semantically unrelated labels is also an emergent ability. While {% cite yoo-etal-2022-ground %} also studied this, the scale of the models they used for this particular experiment were not sufficiently distinct to show this effect.
1. Instruction tuned models improve at making use of semantic priors and also to make use of input-label mapping. However, the former is stronger than the latter.

Figures 10, 11 and 12 show these results in more detail.

<figure>
  <a href="{{site.url}}/assets/icl_larger.png"><img src="{{site.url}}/assets/icl_larger.webp" alt="Overriding power contrasted with scale."/></a>
  <figcaption>Fig. 10: Models get better at overriding semantic priors as they get larger {% cite wei2023larger %}.</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/icl_sul.png"><img src="{{site.url}}/assets/icl_sul.webp" alt="Unrelated label usage vs scale"/></a>
  <figcaption>Fig. 11: Models get better at making use of even unrelated labels in the prompt as they grow larger {% cite wei2023larger %}.</figcaption>
</figure>

<figure>
  <a href="{{site.url}}/assets/icl_instruction.png"><img src="{{site.url}}/assets/icl_instruction.webp" alt="Overriding power vs size for instruction-tuned models results."/></a>
  <figcaption>Fig. 12: Instruction tuned language models are worse at overriding semantic priors {% cite wei2023larger %}.</figcaption>
</figure>

## Conclusion

Understanding in-context learning, how, and why it works has shown a lot of progress in the past few months. Through the works discussed here, we can conclude that models are indeed sensitive to label corruption in the input. However, this does not always hold. This is particularly relevant for smaller language models.

Large language models are stronger at overriding semantic priors they have seen in their pre-training and following the input-label mapping in the input. They are even capable of making use of semantically unrelated labels used in the input.


## References
{% bibliography --cited %}
