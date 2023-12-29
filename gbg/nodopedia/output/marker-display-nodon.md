---
title: Marker-Display Nodon
layout: nodopedia/entry
category: output
quote: Yes, displaying markers. That's my job.<br>Just tell me what you want displayed!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td rowspan="2">Input</td><td>The input received determines the marker's display.<br>When Rotate or Pie chart is selected, the unit will be degrees (°).</td><td>The input for the Move, Extend, Line, Opacity, and Flash properties is restricted to between 0.00 and 1.00.<br><br>Rotate and Pie chart loop between 0.00 and 360.00.</td></tr></tbody></table></div>

## Output
None

## Connection
None

# Settings
## Light Up How?
Sets how the marker should be displayed.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Move</td><td>Displays a square marker with the same height as the Nodon. The larger the input, the further the marker moves to the right. An input of 0.00 represents the far left of the marker, and an input of 1.00 represents the far right.</td></tr><tr><td>Extend</td><td>The higher the input, the further the marker will extend. A value of 0.00 represents the far left of the Nodon, while 1.00 represents the far right.</td></tr><tr><td>Line</td><td>Displays a marker that moves in a line from left to right based on the input value. The left edge of the Nodon is 0.00 and the right edge is 1.00.<br>The marker will not display if the input value is 0.00.</td></tr><tr><td>Rotate</td><td>The marker will fill the whole area of the Nodon. The marker will rotate in degrees by the number received at this input port.</td></tr><tr><td>Pie chart</td><td>The larger the number received at this input, the larger the slice of pie on the Pie chart.</td></tr><tr><td>Opacity</td><td>The marker will be displayed over the whole of the Nodon. The higher the input, the more opaque the marker will be.</td></tr><tr><td>Flash</td><td>Displays the marker over the whole of the Nodon. When inputs other than 0.00 are received, the marker will flash. The higher the input, the more opaque the marker will be.</td></tr></tbody></table></div>

## Activates Bull's–Eye Nodon?
Sets whether or not the Bull's–Eye Nodon responds to the displayed marker.

# Other
Markers will only be displayed on the program screen.<br>
You can use a Bull's-Eye Nodon to detect whether the marker displays or not.