---
title: Shake Nodon
layout: nodopedia/entry
category: input
quote: Shake it, baby! Shake the console and the Joy-Con controllers! Ooh yeeeah! I'll let you know just how much you shook!
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Momentum</td><td>Checks the acceleration of the specified target, then converts it to output according to the Output and Range settings.</td><td>Between 0.00 and 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Check What?
Determines which controller will be checked.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Auto</td><td>Automatically switches the target to be checked, depending on which controller is connected.<br><br>See also: <a href="/gbg/nodopedia/tips/automatic-switching-between-controllers">Automatic Switching between Controllers</a></td></tr><tr><td><br>Joy‑Con (L)<br>Joy‑Con (R)</td><td>Checks the specified target.</td></tr></tbody></table></div>

## Controller Number
Select which controller to check.

This setting is only available when Check What? is set to Joy-Con.

## Output and Range
Sets how the raw input will be converted before being sent as output.

For the console, 2g (g-force) converts to 1.00.
For the Joy-Con, 4g converts to 1.00.

See also: <a href="/gbg/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>

## Direction
Checks which direction the swing was made in.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Up<br>Down<br>Left<br>Right<br>Forward<br>Backward</td><td>Outputs a positive number if it detects a swing in the indicated direction.</td></tr><tr><td>Any direction</td><td>Ignores the direction of the swing and only measures its strength.</td></tr></tbody></table></div>

# Other
When you call up a Shake Nodon or play games that include Shake Nodon, a tip will be displayed recommending that players use the Joy-Con strap.