---
title: Rotation-Speed Nodon
layout: nodopedia/entry
category: input
quote: I know how fast you've been spinning your console or your Joy-Con...and the axis and the direction too! I know a lot about spinning!
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Rotation speed</td><td>Outputs the speed that the Joy-Con or console is rotating at.<br>When the console's rotation is being checked, 2.50 rotations per second will result in an output of 1.00.<br>In the case of the Joy-Con, 5.00 rotations per second will result in an output of 1.00.</td><td>When Direction is set to ＋/－: Between -1.00 and 1.00<br>When Direction is set to ＋ or －: Between 0.00 and 1.00</td></tr></tbody></table></div>

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

## Axis of Rotation
Sets which axis of rotation to check.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>X/Y/Z</td><td>Outputs the speed of the rotation around the specified axis.</td></tr><tr><td>Any direction</td><td>Outputs the highest speed of rotation around any axis.</td></tr></tbody></table></div>

## Direction
Sets which direction of rotation to check.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>＋</td><td>Reacts only when rotation is in a positive direction.</td></tr><tr><td>－</td><td>Reacts only when rotation is in a negative direction.</td></tr><tr><td>＋/－</td><td>Reacts when rotation is in either direction.</td></tr></tbody></table></div>