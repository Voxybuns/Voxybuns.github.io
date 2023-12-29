---
title: Stick Nodon
layout: nodopedia/entry
category: input
quote: Wahoo! I'll let you know what the control stick is up to!
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td rowspan="2">Amount tilted</td><td>The amount of control stick tilt is converted according to the Output and Range settings, then sent as output.</td><td>When Direction is Left/Right or Up/Down: Between -1.00 to 1.00<br>In other cases: Between 0.00 to 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Controller Number
Select which controller to check.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>1 to 4</td><td>Checks the controller with the selected number.</td></tr><tr><td></td><td>Checks the Joy-Con controllers attached to the console.</td></tr><tr><td>Auto</td><td>Changes the controller to be automatically checked, depending on connection status.<br>See also: <a href="/gbg/nodopedia/tips/automatic-switching-between-controllers">Automatic Switching between Controllers</a></td></tr></tbody></table></div>

## Output and Range
Sets how the raw input will be converted before being sent as output.

See also: <a href="/gbg/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>
## Direction
Sets which direction of control stick tilt to check for.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Any</td><td>Outputs a positive value when the control stick is tilted in any direction.</td></tr><tr><td>Up/Down</td><td>Outputs a positive value if the control stick is tilted up and a negative value if it is tilted down.</td></tr><tr><td>Left/Right</td><td>Outputs a negative value if the control stick is tilted left and a positive value if it is tilted right.</td></tr></tbody></table></div>
## Which Stick?
Sets the control stick to check.