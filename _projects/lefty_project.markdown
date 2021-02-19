---
layout: page
title: LEFTy
description: Use state of the art transfer learning tecniques in NLP to solve the problem of author profiling
date: 2019-01-15
img: /assets/img/lefty.webp
importance: 2
---

In times of deep learning's massive expansion new applications for it aren't surprising, but they are welcome. Progress in NLP however has been slow and unconvincing to some researchers. Recent months, however, have shown unprecedented progress in the field using using transfer learning based on a language model trained on massive amounts of data. Current trend is to use transformers, however training and inferring requires more computational power and additional costs.

Transfer learning has been a concept that was thought not to be applicable for NLP since great results were never achieved. However, [ELMo](https://arxiv.org/pdf/1802.05365.pdf) and [ULMFiT](https://arxiv.org/pdf/1801.06146.pdf) changed that in early 2018 with new SOTA results across many different tasks. Big labs like OpenAI and Google then followed it up with [GPT (2)](https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf) and [BERT](https://arxiv.org/pdf/1810.04805.pdf) which use transformers to train different kinds of LM's on massive and diverse text corpora.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/lefty.webp' | relative_url }}" alt="LEFTy project structure" title="LEFTy project structure"/>
    </div>
</div>
<div class="caption">
    Project structure illustrating both the transfer learning and prediction phases.
</div>

Results achieved using LEFTy (based on fine tuning techniques outlined by Howard and Ruder in their ULMFiT paper) are near the SOTA for author profiling.
LEFTy

A language model was trained on Spanish Wikipedia articles using both and an LSTM and a QRNN model. More on how the language model was trained can be found here.

Training and testing sets used to train this project were the PAN'17 and SpanText corpora. Project's objective was specifically creating a text profiler for the Spanish language which is why those corpora were used.

The fine tuning techniques for both the LM and the classifier models are taken from the ULMFiT paper linked above. The process and full results are presented in my [undergrad thesis](https://jjdv.xyz/personal/main.pdf) on this subject (in Spanish).

I used to run a live demo on this site, but the cost of running an instance separate of my webserver wasn't worth it. I might eventually bring it back once I've worked on something more lightweight which quickly became a goal of mine.

I used `fastai`, `pandas`, and `numpy` for this project. Additionally, I was serving it with `flask`.
