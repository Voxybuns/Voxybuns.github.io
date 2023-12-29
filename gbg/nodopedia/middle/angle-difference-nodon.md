---
title: Angle-Difference Nodon
layout: nodopedia/entry
category: middle
quote: Ah, I know that look! You're wanting to calculate some angles, aren't ya? Instead of subtracting one from the other, you might want to give Angle Difference a try!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Angle 1</td><td>Takes the input value as the reference<br>angle, measured in degrees (°).</td><td>Signal passes through unchanged</td></tr><tr><td>Angle 2</td><td>Takes the input value as the angle to be subtracted.<br>Measured in degrees (°).</td><td>Signal passes through unchanged</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Difference</td><td>Outputs the difference between angle 1 and angle 2.<br>This isn't a simple subtraction, but a calculation of the difference only within a single lap of a circle.<br>For example, inputting 10.00 and 380.00 results in not -370.00, but -10.00.<br>Measured in degrees (°).</td><td>Between -180.00 and 180.00</td></tr></tbody></table></div>

## Connection
None

# Settings
None