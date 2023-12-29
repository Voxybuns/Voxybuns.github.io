---
title: Car Nodon
layout: nodopedia/entry
category: object
quote: Vroom vroom!<br>I make cars drive around on the game screen!
---

# Port
## Input
<div class="table-wrapper"><table><thead><tr><th>Port name</th><th>Port function</th><th>Input operation</th></tr></thead><tbody><tr><td>Accelerate</td><td>If the received input is a positive value, the car will accelerate forward. If it's a negative value, then the car will reverse.<br>If a negative value is received while accelerating, or a positive value while reversing, this represents hitting the brakes to stop the car.</td><td>Restricted to between -2.00 and 2.00</td></tr><tr><td>Steering Wheel</td><td>The value received as input will represent the steering wheel being turned left or right and cause the car to turn.<br>Negative values will turn the wheel left, and positive values will turn it right.</td><td>Restricted to between -1.00 and 1.00</td></tr><tr><td>Jump</td><td>When a value other than 0.00 is received, the car will jump.<br>The height of the jump will be determined by the length of time that the signal is<br>received for.</td><td>Determines whether a signal is or is not equal to 0.00</td></tr></tbody></table></div>

## Output
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

## Movement Speed
Sets the scale factor of the movement speed.<br>
Can be set between 0.00 and 2.00.

## Jump Strength
Sets the scale factor of the jump speed.<br>
Can be set between 0.00 and 2.00.

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

# Other
You can call up to eight Car Nodon per game.