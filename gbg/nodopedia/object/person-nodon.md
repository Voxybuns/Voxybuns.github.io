---
title: Person Nodon
layout: nodopedia/entry
category: object
quote: Hey, peeps!<br>I'm the one that puts the person out on the game screen!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Forward/<br>Backward</td><td>Moves the person back or forth at a speed determined by the value of the input.<br>Negative values will move the person backward, and positive values will move them forward.</td><td>Restricted to between -2.00 and 2.00</td></tr><tr><td>Left/Right</td><td>Moves the person left or right at a speed determined by the value of the input.<br>Negative values will move the person left, and positive values will move the person right.</td><td>Restricted to between -2.00 and 2.00</td></tr><tr><td>Jump</td><td>Causes the person to jump when a value other than 0.00 is received.<br>The height of the person's jump will be determined by the length of time that a value other 0.00 is received.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr><tr><td>Action</td><td>The person will perform the actions below based on the input value.<br><br>0.00 ≤ Input value &lt; 1.00 → No action<br>2.00 ≤ Input value &lt; 3.00 → Celebrate<br>3.00 ≤ Input value &lt; 4.00 → Punch<br>4.00 ≤ Input value &lt; 5.00 → Kick<br>5.00 ≤ Input value &lt; 6.00 → Turn<br>Other: Action specified by the setting</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

# Output
None

## Connection
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th></tr></thead><tbody><tr><td>Upper connection port</td><td>Connect this port to the lower connection port of another Nodon to physically link objects.<br><br>Connects to all lower connection ports.</td></tr></tbody></table></div>

# Settings
## Properties
Sets the properties of objects.

The following properties can be enabled or disabled: Visible, Solid, Destructive, Destructible, Play Sound When Hit/Destroyed?, or Can Be Grabbed by Hand Nodon?<br>
Movable is always enabled.

See also: <a href="/gbg/nodopedia/tips/about-properties">About Properties</a>

## Color
Sets the color.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>Auto</td><td>The color will be applied automatically, depending on the properties.<br><br>See also: <a href="/gbg/nodopedia/tips/when-color-is-set-to-auto">When Color Is Set to Auto</a></td></tr><tr><td>Blue<br>Red<br>Green<br>Yellow<br>Light blue<br>Pink<br>Lime green<br>Orange<br>Purple<br>Brown<br>White<br>Black</td><td>Changes the color as specified.</td></tr></tbody></table></div>

## Frame of Reference for Motion
Sets which rules an object will base its movement on.

Local cannot be enabled for the Person Nodon.

<div class="table-wrapper"><table><thead><tr><th>Setting value</th><th>Description</th></tr></thead><tbody><tr><td>World</td><td>Moves the object along the world's coordinate system, according to the input received.<br>The world's coordinate system is based on the world's directionality, regardless of the directionality of the camera or the object itself.</td></tr><tr><td>Camera</td><td>Moves the object along the camera's coordinate system, according to the input received.<br>The camera's coordinate system is based on the directionality of the camera's viewpoint.</td></tr></tbody></table></div>

## Action
This setting determines the default action.<br>
You can choose from Celebrate, Punch, Kick, or Turn.<br>
For the triggering conditions for the default action, please see the details for the action port.

## Movement Speed
Sets the scale factor of the movement speed.<br>
Can be set between 0.00 and 2.00.

## Jump Strength
Sets the scale factor of the jump speed.<br>
Can be set between 0.00 and 4.00.

## Size
Sets the size of an object.<br>
The ratios between X, Y, and Z are fixed.<br>
You can only set a size of between 0.10 and 10.00 that the X, Y, and Z dimensions will fit into.

## Position
Determines the position of the object at the time of game start or after a reset.<br>
X, Y, and Z can each be set to between -100.00 and 100.00.<br>
Measured in meters.<br>
However, if Movable is enabled and the world's shape is set to Plane, Dome, Cuboid, or Cylinder, the Y value will be adjusted so that objects lower than Y: 0 aren't embedded into the ground.

## Y-Axis Rotation
Sets the orientation of the object at game start or after a reset, according to y-axis rotation.<br>
Can be set between -180.00° and 180.00°.

## Turning Speed
Applies a value to the turn rate on a fixed scale, when movement direction changes.<br>
A value of 0.00 means movement without any turning.<br>
The scale is fixed between 0.00 and 1.00.

# Other
You can call up to eight Person Nodon per game.