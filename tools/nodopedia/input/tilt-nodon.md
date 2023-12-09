---
title: Tilt Nodon
layout: nodopedia/entry
category: input
quote: I'll let everybody know if the Nintendo Switch console or Joy-Con is being tilted!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Y reset</td><td>When a value other than 0.00 is received at this port, the y-axis angle will reset to a standard value.<br>The standard value will be remembered independently by each Nodon.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td rowspan="2">Tilt angle</td><td>Information about the change in tilt from the console or Joy-Con will be collected as tilt data and then converted according to the Output and Range settings, or be output as an angle.</td><td>Tilt mode: Between -1.00 and 1.00<br>(The default Output Range is between -0.50 and 0.50)<br>Angle of Rotation mode: Between -180.00 and 180.00<br>Measured in degrees (°).</td></tr></tbody></table></div>

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

Only effective in Tilt mode.

See also: <a href="/tools/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>

## Axis of Rotation
Sets the axis that the Nodon checks.

## Mode
Sets how to interpret tilt data from the controller and how to output it.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Tilt</td><td>Converts the tilt data from the console or the Joy-Con and outputs it according to the Output and Range settings.<br>Tilting left or down creates a negative value, and tilting right or up creates a positive value.</td></tr><tr><td>Angle of rotation</td><td>Outputs the tilt data of the console or the Joy-Con as an angle.<br>The output is measured in degrees (°).<br>Note: For the z-axis, the number is the reverse of that in tilt mode.</td></tr></tbody></table></div>