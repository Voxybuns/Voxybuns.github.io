---
title: IR Motion Camera Nodon
layout: nodopedia/entry
category: input
quote: If there are any jobs related to the IR Motion Camera,<br>you have to go through me.
---

# Port
## Input
None

## Output
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Output value</th></tr></thead><tbody><tr><td>Captured portions</td><td>Outputs the number of bright portions captured by the IR Motion Camera.</td><td>Between 0.00 and 16.00</td></tr></tbody></table></div>

## Connection
None

# Settings
## Controller Number
Select which controller to check.

If another IR Motion Camera Nodon with a different Distance to Recognize property is used in the same program, you won't be able to select the controller number used by that Nodon.
When a Nodon that illuminates the IR light is placed in the same program, you won't be able to select that controller number.

## Distance to Recognize
Settings that affect the recognition processes used by the IR Motion Camera.

Only the Distance to Recognize setting can be changed on the IR Motion Camera Nodon with the same controller number. When the Distance to Recognize setting is changed on one Nodon, all other Nodon with the same controller number setting will be automatically changed.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>IR off</td><td>Prevents the IR Motion Camera from emitting infrared light.<br>However, the camera will continue to recognize infrared light from other sources.</td></tr><tr><td>Near<br>Normal<br>Near and Far</td><td>Depending on the setting, the brightness of the infrared light and the recognition threshold used in the recognition process will change.</td></tr></tbody></table></div>

<h2 id="flip">↔</h2>
If this is set to on, the marker display will flip horizontally.

# Other
The bright portions captured by the IR Motion Camera will be displayed as markers within the Nodon.

Markers will only be displayed on the program screen.
You can use a Bull's-Eye Nodon to detect whether the marker displays or not.

You can place only up to 10 IR Motion Camera Nodon at the same time.
When attempting to call a new IR Motion Camera Nodon, the call will be blocked if it clashes with settings on already-present IR Motion Camera Nodon or other Nodon that cause IR light to be emitted.

This Nodon cannot be used with Joy-Con controllers connected to the Nintendo Switch console.
The IR Motion Camera is unavailable on the Nintendo Switch Lite system, the Nintendo Switch Pro Controller, Joy-Con (L), or Joy-Con controllers attached to the Nintendo Switch console.
It's possible to use with a Joy-Con (R) wirelessly connected to a Nintendo Switch Lite system, however.

If you call two or more instances of either IR Motion Camera Nodon or IR-Light Nodon with each set to different controller numbers, you won't be able to wirelessly connect more than four Joy-Con controllers.
Also, if you have five or more Joy-Con controllers wirelessly connected and then call a second instance of either of the Nodon mentioned above, which is then set to a controller number that's different to the first one, the latest-assigned Nodon will be inactive.