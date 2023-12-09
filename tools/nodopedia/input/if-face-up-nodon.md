---
title: If-Face-Up Nodon
layout: nodopedia/entry
category: input
quote: I check to see how much the controller is facing up!<br>Chin up, everyone!
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Facing up</td><td>Collects data to estimate how much the selected face is facing directly upward and then converts it according to the Output and Range settings.<br>Up is defined as the opposite direction to gravity.</td><td>Between 0.00 and 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Check What?
Determines which controller will be checked.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Auto</td><td>Automatically switches the target to be checked, depending on which controller is connected.<br>See also: <a href="/tools/nodopedia/tips/automatic-switching-between-controllers">Automatic Switching between Controllers</a></td></tr><tr><td><br>Joy‑Con (L)<br>Joy‑Con (R)</td><td>Checks the specified target.</td></tr></tbody></table></div>

## Controller Number
Select which controller to check.

This setting is only available when Check What? is set to Joy-Con.

## Output and Range
Sets how the raw input will be converted before being sent as output.

See also: <a href="/tools/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>

## Which Side Should Face Up?
Sets which face is defined as the upward face.