---
title: If-Touched Nodon
layout: nodopedia/entry
category: input
quote: I'll tell you if anyone touches the screen.<br />But be gentle, OK?
---
# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>If touched</td><td>Sends output depending on touches made to the screen.</td><td>0.00 or 1.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Output Timing
Sets when an output of 1.00 will be sent.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>On touch</td><td>Outputs a signal of 1.00 at the moment of the touch.</td></tr><tr><td>While touched</td><td>Outputs a constant signal of 1.00 while something is being touched.</td></tr></tbody></table></div>

## Touch where to output?
Sets what part of the touch screen to check.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>This Nodon</td><td>Responds only when area covered by the Nodon is touched.<br>If the Game-Screen Nodon is called and the viewpoint of the Game-Screen Nodon matches that of the canvas, then the location the If-Touched Nodon responds to will change to match the Game-Screen Nodon's position when the game starts. In any other condition, the location responded to matches the location of the program screen immediately before playing the game.</td></tr><tr><td>Anywhere</td><td>Responds when any part of the touch screen is touched.</td></tr></tbody></table></div>

# Other
The touch screen can recognize a maximum of 10 separate, simultaneous touches.

If the If-Touched Nodon or Touch-Position Nodon are called, then pressing  or  on the game screen will activate the motion-control pointer. This is not affected by the control-method settings.
When the motion-control pointer is active, pressing , , , or  will be treated the same as a physical touch. The If-Touched Nodon and Touch-Position Nodon will respond in the same way.
The same is true when a connected USB mouse is clicked on the game screen.