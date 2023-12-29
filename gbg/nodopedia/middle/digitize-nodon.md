---
title: Digitize Nodon
layout: nodopedia/entry
category: middle
quote: Nice and neat, neat and nice.
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Input</td><td>The Nodon will convert the value going into this port.</td><td>Signal passes through unchanged</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Output</td><td>Outputs the value received as input after converting it into neat portions.</td><td>Accepts any number</td></tr></tbody></table></div>

## Connection
None

# Settings
## Number of Stages
Sets the number of stages that values in the range of 0.00 to 1.00 can be divided into.
You can choose between two to fifty stages.

For example, if you set it to six, the output will be sent in one of the following six, neat portions.

0.00 and up, but below 0.10 → 0.00<br>
0.10 and up, but below 0.30 → 0.20<br>
0.30 and up, but below 0.50 → 0.40<br>
0.50 and up, but below 0.70 → 0.60<br>
0.70 and up, but below 0.90 → 0.80<br>
0.90 and up, but below 1.00 → 1.00

For values that are not 0.00 or are 1.00 and up, the same intervals will be applied, giving the same output.