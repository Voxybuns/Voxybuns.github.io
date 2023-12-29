---
title: Bull's-Eye Nodon
layout: nodopedia/entry
category: middle
quote: Dearest guest, thank you truly<br>for making use of our humble markers.
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Marker amount</td><td>When the bull's-eye overlaps with other Nodon's markers, the amount of overlap will be sent as output, according to the Output and Range settings.</td><td>Between 0.00 and 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Output and Range
Sets how the raw input will be converted before being sent as output.

See also: <a href="/gbg/nodopedia/tips/output-conversion-settings">Output Conversion Settings</a>

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Digital</td><td>Outputs either 1.00 if the value is within the specified range or 0.00 if it's outside the range. It's judged to be within range if it's equal or less than the upper value of the range and equal or more than the lower value.</td></tr><tr><td>Analog</td><td>Passes on any input that falls within the specified range, converted to a value between 0.00 and 1.00 (as opposed to either 0.00 or 1.00).</td></tr></tbody></table></div>

## Bull's–Eye Shape
Sets the shape of the bull's–eye.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Circle</td><td>Checks for contact between the target displayed as a circle within the Bull's–Eye Nodon and other Nodon's markers.</td></tr><tr><td>Rectangle</td><td>Checks for contact between the shape of the Bull's–Eye Nodon itself and other Nodon's markers.</td></tr></tbody></table></div>