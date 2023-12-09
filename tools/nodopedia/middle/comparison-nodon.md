---
title: Comparison Nodon
layout: nodopedia/entry
category: middle
quote: I compare two numbers according to the conditions you give me.<br>But what will they beeee?
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Input 1</td><td>The value received at this port is used as the first number in the comparison.</td><td>Signal passes through unchanged</td></tr><tr><td>Input 2</td><td>The value received at this port is used as the second number in the comparison.</td><td>Signal passes through unchanged</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Result</td><td>Compares input 1 and input 2 according to the specified conditions, then outputs 1.00 if the condition is met.</td><td>0.00 or 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Comparison Method
Specifies how to compare the two input values.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>=</td><td>Outputs 1.00 when input 1 and input 2 have the same value.<br>If they aren't the same, the output will be 0.00.</td></tr><tr><td>&gt;</td><td>Outputs 1.00 when input 1 is greater than input 2.<br>If it isn't greater, the output will be 0.00.</td></tr><tr><td>&lt;</td><td>Outputs 1.00 when input 1 is less than input 2.<br>If it isn't less, the output will be 0.00.</td></tr><tr><td>≥</td><td>Outputs 1.00 when input 1 is greater than or equal to input 2.<br>If it isn't greater or equal, the output will be 0.00.</td></tr><tr><td>≤</td><td>Outputs 1.00 when input 1 is less than or equal to input 2.<br>If it isn't less or equal, the output will be 0.00.</td></tr></tbody></table></div>