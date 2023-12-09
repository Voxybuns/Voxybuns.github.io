---
title: Touch-Position Nodon
layout: nodopedia/entry
category: input
quote: Are you touching somewhere on the screen?<br>Whatever it is, I can feel it!
---
# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>X</td><td>Outputs the X coordinate of the last touched location.<br>The far left of the touch screen is -640, the center is 0, and the far right is 640.<br>However, in practice, the output is limited to within a certain area of the screen.<br>The output will be 0.00 from game start if the screen hasn't been touched.<br>Measured in pixels.</td><td>Between -625.00 to 624.00</td></tr><tr><td>Y</td><td>Outputs the Y coordinate of the last touched location.<br>The lower edge of the touch screen is -360, the center is 0.00, and the upper edge is 360.<br>However, in practice, the output is limited to within a certain area of the screen.<br>The output will be 0.00 from game start if the screen hasn't been touched.<br>Measured in pixels.</td><td>Between -344.00 to 345.00</td></tr></tbody></table></div>

## Connection
None

# Settings
None

# Other
When this Nodon is called, then pressing  or  will activate the motion-control pointer. This is not affected by the control-method settings.
When the motion-control pointer is active, pressing , , , or  on the game screen will be treated the same as a physical touch. The If-Touched Nodon and Touch-Position Nodon will respond in the same way.
The same is true when clicking with a USB mouse.