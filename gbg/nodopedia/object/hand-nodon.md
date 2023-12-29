---
title: Hand Nodon
layout: nodopedia/entry
category: object
quote: Want to grab something?<br>I'll be your helping hand!
---

# If you call up this Nodon...
This Nodon will place a hand line on the game screen. The line will move according to the tilt of a wirelessly connected Joy-Con controller.

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Grab</td><td>If a value other than 0.00 is received at this port, the hand will grab whatever the hand line is currently pointing at.<br>However, objects in connection groups that include a Game-Screen Nodon, a Camera Nodon, or a Camera-Position Nodon cannot be grabbed.<br>If the hand grabs an object in a connection group that includes a Camera-Target Nodon, the camera's target will not change while the object is grabbed.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr><tr><td>Forward/<br>Backward</td><td>Moves the grabbed object back or forth, depending on the input.<br>Plus values will move the object forward, minus values back.<br>Measured in meters per second.</td><td>Restricted to between -1,000.00 and 1,000.00.</td></tr></tbody></table></div>

## Output
None

## Connection
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th></tr></thead><tbody><tr><td>Upper connection port</td><td>Connect this port to the lower connection port of another Nodon to physically link objects.<br>Connected objects will be treated as gripped objects, gripped from the start.<br>It's not possible to drop a connected object.<br>You can only connect one object per port.<br>Object Nodon, Fancy-Object Nodon, Text-Object Nodon, Number-Object Nodon, Moving-Object Nodon, Rotating-Object Nodon, Play-Sound Nodon, Effect Nodon, All-Sensor Nodon, Extending-Object Nodon, Destroy-Object Nodon, Teleport-Object-Entrance/Exit Nodon, and Attract-Object Nodon can connect to this connection port only with their lower connection ports.<br>It cannot connect to groups that include a Camera-related Nodon.</td></tr></tbody></table></div>

# Settings
## Controller Number
Select which controller to check.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>1 to 4</td><td>Checks the controller with the selected number.</td></tr><tr><td>Auto</td><td>Changes the controller to be automatically checked, depending on connection status.<br>See also: <a href="https://www.tablesgenerator.com/Pages/Page_871338295.html">Automatic Switching between Controllers</a></td></tr></tbody></table></div>

## Which Controller?
Sets which Joy-Con to check.

## Mode
Sets the type of grip.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Hold</td><td>Grips the object as long as an input other than 0.00 is received.<br>When 0.00 is received, the object will be dropped.</td></tr><tr><td>Toggle</td><td>If an input with a value other than 0.00 is received when nothing is gripped, the hand will grip an object. It will continue to grip, even if a value of 0.00 is received.<br>If an input with a value other than 0.00 is received when something is gripped, the hand will release the object.</td></tr></tbody></table></div>

## Carrying Style
Sets the orientation and position for gripped objects.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Precise</td><td>The object will keep its position and orientation even after<br>being gripped.</td></tr><tr><td>Snappy</td><td>Resets the orientation and position, then grips.<br>The orientation will be determined by the object's connection point. The position will be determined by the Snap Distance setting.</td></tr></tbody></table></div>

## Snap Distance
Sets the position of the grabbed object.<br>
Can be set between 0.00 and 100.00. Measured in meters.<br>
Only takes effect when Carrying Style is set to Snappy or an object is physically connected.

## Center of Rotation
Sets where changes in the tilt angle of the Joy-Con will be reflected on the in-game hand.<br>
You can choose from Wrist, Elbow, or Shoulder.<br>
Selecting Wrist will result in smaller movements, while Shoulder makes larger movements.

## Launch Speed
Sets the amount of force that is applied to gripped objects on release. Objects will be sent flying on release due to this power.<br>
You can set between 0.00 and 100.00. Measured in meters per second.

# Other
The hand's line will be moved with the motion sensor of a wirelessly connected Joy-Con.<br>
Point the Joy-Con at the screen and move it up, down, left, and right.

You can call up to eight Hand Nodon per game.