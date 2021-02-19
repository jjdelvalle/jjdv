---
layout: page
title: Spanish LM
description: Build a language model for Spanish, as most language models are built using English data
date: 2018-12-23
img: /assets/img/lm_es.webp
importance: 3
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/lm_es.webp' | relative_url }}" alt="GradStats preview" title="GradStats preview"/>
    </div>
</div>
<div class="caption">
    My Language Model network structure
</div>

At the time of this writing, almost all LMs are being trained on English corpora. Since the `fastai` library allows me to create a new LM in a considerably seamless manner, I decided to go for it. Besides, I kinda needed an LM in order to apply transfer learning techniques in order to achieve the results I was after in my target task.

The first step was to get a corpus big enough to train a big LSTM/QRNN network. I decided to use a Wikipedia 103 corpus as this was pretty standard when I was working on this model. Since then, models such as GPT have proven that more diverse datasets can result in significantly more robust LMs.

I downloaded the Wikipedia dump and cleaned it a bit. Luckily, since this is Wikipedia data, it is already pretty clean. I simply got rid of really short articles in the dataset and was pretty much ready to train. Vocab size and number of tokens the model was trained on are definitely factors in the resulting performance. Even though this was a really good result back in 2018, it probably had a lot more potential considering what we've now seen from LMs.

I ended up using GCP services and taking advantage of the 300 USD credit you receive. This allowed me to set up a V100 instance and just train there. Using QRNNs resulted in ~30 mins per epoch. LSTMS were around ~1:00 per epoch. I used a Wikipedia dump and generated a 100M training set, with a 30k vocab. All this to say there’s definitely room for improvement and anyone could go ahead and improve these results.

Results:

* LSTM language model: 4 epochs, 3.140521 for val loss and 0.376913 accuracy. Perplexity was thus **23.1038**
* QRNN language model: 7 epochs, 3.193912 for val loss and 0.367543 accuracy. Perplexity was thus **24.2884**

Pre-trained models can be found here along with the itos file on [Google Drive](https://drive.google.com/open?id=1CZftqrMg-MRH9yXV7FRBv6J_NOtBiK-2). (This link has been accessed over 100 times on the fastai forums)

Shoutouts to [@guggersylvian](https://twitter.com/guggersylvain) for guiding me along the way and fixing a bug just in time for me train.

If someone could do some baseline testing with this LM, that’d be sweet.

*NOTE*: this post was adapted from what I originally wrote on the fastai forums.

I used `pandas`, `fastai`, `pickle`, and `pytorch` for this project.
