---
title: 2D-Marker-Display Nodon
layout: nodopedia/entry
category: output
quote: Great to be working with you!<br>I'll take care of moving the round markers...around!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>X</td><td>The marker displayed within the Nodon will move to the right, depending on the value received at this port.<br>With an input of 0.00, the circle will be in contact with the leftmost edge. With an input of 1.00, the circle will be in contact with the rightmost edge.</td><td>Restricted to between 0.00 and 1.00</td></tr><tr><td>Y</td><td>The marker displayed within the Nodon will move upward, depending on the value received at this port.<br>With an input of 0.00, the circle will be in contact with the lowest edge. With an input of 1.00, the circle will be in contact with the uppermost edge.</td><td>Restricted to between 0.00 and 1.00</td></tr></tbody></table></div>

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Result</td><td>When this Nodon's round marker comes into contact with other Nodon's markers, the amount of overlap is sent as output, converted according to the Output and Range settings.</td><td>Between 0.00 and 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Output and Range
Sets how the raw input will be converted before being sent as output.

See also: <a href="/gbg/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>

## Size
Sets the size of the marker.<br>
The size is proportional to the shortest side of the Nodon (height or length), which is counted as 1.00. The size can be set to between 0.00 and 1.00.

## Activates Bull's–Eye Nodon?
Sets whether or not the Bull's–Eye Nodon responds to the displayed marker.

# Other
Markers will only be displayed on the program screen.<br>
You can use a Bull's-Eye Nodon to detect whether the marker displays or not.