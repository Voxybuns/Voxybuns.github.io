---
title: IR-Light Nodon
layout: nodopedia/entry
category: output
quote: I've got an infrared emitter,<br>and I'm not afraid to use it!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Light up</td><td>If this port gets an input other than 0.00,<br>the IR Motion Camera built into the Joy-Con (R) will emit infrared light.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
None

## Connection
None

# Settings
## Controller Number
Specifies the number of the controller that will emit infrared light.<br>
If another Nodon using the IR Motion Camera is called up in the same program, you won't be able to choose the same controller number.<br>
You can select either 1 or 2.

## Continue Output for How Long?
Sets the number of seconds that the output will continue for.<br>
Can be set to between 0.00 and 100.00.

# Other
You can only call up to ten IR Light Nodon.<br>
Also, it will not be possible to call new IR Light Nodon if the settings clash with any IR Motion Camera Nodon that have already been called.

This Nodon cannot be used with Joy-Con controllers connected to the Nintendo Switch console.<br>
Since Joy-Con (L) controllers, the Nintendo Switch Lite system, and the Nintendo Switch Pro Controller do not have IR Motion Cameras, this Nodon cannot be used with them. It's possible to use with a Joy-Con (R) controller wirelessly connected to a Nintendo Switch Lite system, however.

If you call two or more instances of either IR Motion Camera Nodon or IR-Light Nodon with each set to different controller numbers, you won't be able to wirelessly connect more than four Joy-Con controllers.<br>
Also, if you have five or more Joy-Con controllers wirelessly connected and then call a second instance of either of the Nodon mentioned above, which is then set to a controller number that's different to the first one, the latest-assigned Nodon will be inactive.