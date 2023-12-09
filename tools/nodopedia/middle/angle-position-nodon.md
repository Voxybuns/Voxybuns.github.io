---
title: Angle → Position Nodon
layout: nodopedia/entry
category: middle
quote: So, I output sines and cosines.<br>Just don't ask me what any of that means...
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Angle</td><td>The input received at this port will be used as an angle to calculate the location.<br>Measured in degrees (°).</td><td>Loops between -180.00 and 180.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Horizontal position</td><td>Using the value received at the angle port, this calculates the location of the angle on a circle with a radius of 1.00, then outputs the horizontal location.<br>This will be the cos (cosine) of the angle.</td><td>Between -1.00 and 1.00</td></tr><tr><td>Vertical position</td><td>Using the value received at the angle port, this calculates the location of the angle on a circle with a radius of 1.00, then outputs the vertical location.<br>This will be the sin (sine) of the angle.</td><td>Between -1.00 and 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
None